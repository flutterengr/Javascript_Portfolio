const db = require("../database/models")

const moviesController = {
    /* Listo las peliculas en la homepage*/

    list: async (req,res)=>{
      const movies = await db.Movie.findAll();
      res.render("home",{movies})
    },

    /*Muestro los detalles de peliculas mediante el bosquejo de la base de datos realizado en models*/
    detail: async (req, res) => {
      const id = req.params.id;
      const movie = await db.Movie.findByPk(id);
      const genre = await db.Genre.findByPk(movie.genre_id);
      movie.genre = genre.name;

    /* Logica actores
      const actor_movie = await db.Actor_Movie.findByPk(id);
      const actor = await db.Actor.findByPk(actor_movie.actor_id)
      actor_movie.name = actor.first_name;
    */
    

      res.render('detail', {movie});
    }

   /*
    create: (req, res) => { 
     
     const title  = await db.movies.findAll();
     const rating  = await db.movies.findAll();
     const awards = await db.movies.findAll();
     const length = await db.movies.findAll();
     const realeaseDate = await db.movies.findAll();
     const genre = await db.Genre.findAll();

      res.render('/create');
    }*/
    
   /*
    premiere: async (req, res) => {     
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const title  = await db.movies.findAll();
        const rating  = await db.movies.findAll();
        const awards = await db.movies.findAll();
        const length = await db.movies.findAll();
        const releaseDate = await db.movies.findAll();
        const genre = await db.Genre.findAll();

          return res.render('/create', {
              errors: errors.mapped(),
              title : req.body,
              rating,
              awards,
              length,
              realeaseDate,
              genre
          });
      }

      const newImage = await db.Image.create({name: req.files[0].filename});

      const newModel = await db.Model.create({
          title: req.body.title,
          rating: req.body.rating,
          awards: req.body.awards,
          length: req.body.length,
          releaseDate: req.body.releaseDate,
          genre: req.body.genre
      },
      {include: ['title', 'rating', 'awards', 'length', 'releaseDate','genre']});

      await db.Product.create({
          title_id: newModel.id,
          rating: req.body.rating,
          awards: req.body.awards,
          length: req.body.length,
          genre: req.body.genre
      },
      {include: ['discount', 'model', 'size']});

      return res.redirect('/');
  }
*/

   








}


module.exports= moviesController;