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
        /////////////aqui
      
}

module.exports = (movieValidator)