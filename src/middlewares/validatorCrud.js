const {check, validationResult, body} = require('express-validator');
const fs = require('fs');
const path = require('path')
const bycrypt = require('bcrypt');

const movieValidator= {
    create: [
        body('title')
            .notEmpty()
                .withMessage('Titulo de la pelicula')
                .bail(),
        body('rating')
            .notEmpty()
                .withMessage('El rating es obligatorio')
                .bail(),
        body('awards')
            .custom((value)=>{
                return (value <100 && value >=0)
            })
                .withMessage('Los premios deben ser mayor o igual a 0 y menor a 100')
                .bail(),
        body('length')
            .notEmpty()
                .withMessage("La duracion de la pelicula no puede estar vacia")
                .custom((value)=>{
                    console.log(value.length)
                    return ((value.length >40 && value.length <220))
                })
                .withMessage("El valor debe ser mayor a 40 minutos y menor a 220 ")
                .bail(),
        body('releaseDate')
             .notEmpty()
             .withMessage('La fecha de estreno es obligatoria')
                .bail(),
        body('genre')
            .notEmpty()
            .withMessage('El genero es obligatorio')
            .custom(function (value) {
                console.log(value)
                     return ((value == 'Accion' || value == 'Drama' || value == 'Comedia' || value == 'Terror' || value == 'Drama' || value == 'Aventuras' || value == 'Musical' || value == 'Fantasia'|| value == 'Infantiles'|| value == 'Ciencia Ficcion' || value == 'Suspenso' || value == 'Documental' ))
                    })
            .withMessage("El genero de las peliculas solo pueden ser: Accion, Drama, Comedia, Terror, Drama, Aventuras, Musical, Fantasia, Infantiles, Suspenso, Documental o accion ")
            .bail()    
        ],
    edit: [
        body('title')
            .notEmpty()
                .withMessage('Titulo de la pelicula')
                .bail(),
        body('rating')
            .notEmpty()
                .withMessage('El rating es obligatorio')
                .bail(),
        body('awards')
            .custom((value)=>{
                return (value <100 && value >=0)
            })
                .withMessage('Los premios deben ser mayor o igual a 0 y menor a 100')
                .bail(),
        body('length')
            .notEmpty()
                .withMessage("La duracion de la pelicula no puede estar vacia")
                .custom((value)=>{
                    console.log(value.length)
                    return ((value.length >40 && value.length <220))
                })
                .withMessage("El valor debe ser mayor a 40 minutos y menor a 220 ")
                .bail(),
        body('releaseDate')
             .notEmpty()
             .withMessage('La fecha de estreno es obligatoria')
                .bail(),
        body('genre')
            .notEmpty()
            .withMessage('El genero es obligatorio')
            .custom(function (value) {
                console.log(value)
                     return ((value == 'Accion' || value == 'Drama' || value == 'Comedia' || value == 'Terror' || value == 'Drama' || value == 'Aventuras' || value == 'Musical' || value == 'Fantasia'|| value == 'Infantiles'|| value == 'Ciencia Ficcion' || value == 'Suspenso' || value == 'Documental' ))
                    })
            .withMessage("El genero de las peliculas solo pueden ser: Accion, Drama, Comedia, Terror, Drama, Aventuras, Musical, Fantasia, Infantiles, Suspenso, Documental o accion ")
            .bail()
    ]
}

module.exports = (movieValidator)