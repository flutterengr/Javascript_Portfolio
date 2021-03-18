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
      

      res.render('detail', {movie,genre});
    }
}

module.exports= moviesController;