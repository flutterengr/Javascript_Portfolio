const db = require("../database/models")

const moviesController = {
    list: async(req,res,next)=>{
      const movies = await db.Movie.findAll();
      res.render("home",{movies})
    }
}

module.exports= moviesController