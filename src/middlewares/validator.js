const {body} = require('express-validator');

module.exports = {
    create: [
        body('title')
            .notEmpty()
                .withMessage('El titulo de la pelicula es obligatorio')
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
                .bail(),
        body('releaseDate')
             .notEmpty()
             .withMessage('La fecha de lanzamiento es obligatoria')
                .bail(),
        body('genre')
            .notEmpty()
            .withMessage('El genero es obligatorio')
            .custom(function (value) {
                     return ((value == '1' || value == '2' || value == '3' || value == '4' || value == '5' || value == '6' || value == '7' || value == '8'|| value == '9'|| value == '10' || value == '11' || value == '12' ))
                    })
            .withMessage("El genero de las peliculas solo pueden ser: Accion, Drama, Comedia, Terror, Drama, Aventuras, Musical, Fantasia, Infantiles, Suspenso, Documental o accion ")

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
                .bail(),
        body('releaseDate')
             .notEmpty()
             .withMessage('La fecha de estreno es obligatoria')
                .bail(),
        body('genre')
            .notEmpty()
            .withMessage('El genero es obligatorio')
           
    ]
}

