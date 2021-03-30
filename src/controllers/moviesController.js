const db = require("../database/models");
const {validationResult} = require('express-validator');

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

  create: async (req, res) => {
    const genres = await db.Genre.findAll();
    res.render("create", {genres});
  },

  premiere: async (req, res) => {
    
    const errors = validationResult(req);
    let movie2 = undefined;
    const genres = await db.Genre.findAll();

    if (!errors.isEmpty()) {
    return res.render('create', {
            movie: movie2,
            genres,
            errors: errors.errors,
            old: req.body
        });
    }



    const movie = {
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      length: req.body.length,
      release_date: req.body.releaseDate,
      genre_id: req.body.genre
    };
    const newMovie = await db.Movie.create(movie);
    return res.redirect("/");
  },

  edit: async (req, res) => {
    
    const id = req.params.id;
    const movie = await db.Movie.findByPk(id);
    const genres = await db.Genre.findAll();


    res.render("edit", { movie, genres });
  },

  update: async (req, res) => {

    const errors = validationResult(req);
    const genres = await db.Genre.findAll();

    if (!errors.isEmpty()) {
    return res.render('edit', {
            errors: errors.errors,
            genres
        });
    }
     
     const id = req.params.id;
     const movie = await db.Movie.findByPk(id);
   
     await db.Movie.update({
    
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      length: req.body.length,
      release_date: req.body.releaseDate,
      genre_id: req.body.genre //solo guardo el id
    
    },{

    where:{
       id: movie.id
      }
   })

    return res.redirect("/");
  
  },

  delete: async (req, res) => {
    //Realizar con paranoid
    await db.Movie.destroy({
      where: {id: req.params.id,},
    });
    return res.redirect("/");
  },
};

module.exports = moviesController;
