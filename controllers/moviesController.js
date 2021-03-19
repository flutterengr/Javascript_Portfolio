const db = require("../database/models");

const moviesController = {
  /* Listo las peliculas en la homepage*/

  list: async (req, res) => {
    const movies = await db.Movie.findAll();
    res.render("home", { movies });
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

    res.render("detail", { movie });
  },
  
  create: (req, res) => {
    res.render("create");
  },

  premiere: async (req, res) => {
    //const errors = validationResult(req);
    /*if (!errors.isEmpty()) {
    console.log('nO ErrorES')*/

    const genreName = req.body.genre;
    const genre = await db.Genre.findOne({ where: { name: genreName } });

    const movie = {
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      length: req.body.length,
      release_date: req.body.releaseDate,
      genre_id: genre.id
      }
      console.log(movie)
     
     const newMovie = await db.Movie.create(movie);

     res.render('create');
    
  },
  
  edit: async (req, res) => {

    const id = req.params.id;
    const movie = await db.Movie.findByPk(id);
    const genre = await db.Genre.findByPk(movie.genre_id);
    movie.genre = genre.name;



   res.render ('edit', {movie});

  },

  update: async (req, res) => {

    const id = req.params.id;
    const movieToUpdate = await db.Genre.findByPk(id);

    const movieUpdate = {
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      length: req.body.length,
      release_date: req.body.releaseDate,
      genre_id: genre.id
      }
      console.log(movie)
      
      const newMovie = await db.Movie.create(movieUpdate);
      res.render('edit');

  }

};

module.exports = moviesController;
