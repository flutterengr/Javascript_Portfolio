const db = require("../database/models")

const moviesController = {
    list: async (req,res)=>{
      const movies = await db.Movie.findAll();
      res.render("home",{movies})
    },

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
}

module.exports= moviesController;