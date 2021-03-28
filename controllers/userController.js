const db = require("../database/models");
const bcrypt = require("bcryptjs");
const { check, validationResult, body } = require("express-validator");

const userController = {
  showLogin: (req, res) => {
    res.render("login");
  },

  processLogin: async (req, res) => {
    const pass = req.body.password;
    const users = await db.User.findAll(); //Traigo todos los usuarios
    const userExist = users.find((user) => user.email == req.body.email);
    const compare = bcrypt.compareSync(pass, userExist.password); //Comparo contraseña del req con la de los usuarios

    if (userExist && compare) {
      req.session = userExist; //Con express-session asigno a la sesion el email del usuario encontrado
      if (req.body.remember != undefined) {
        res.cookie("userEmail", userExist.email , { maxAge: 1000 * 60 * 60 });

      }
      return res.redirect("/");
    
    } 
    
  },

  showRegister: (req, res) => {
    res.render("register");
  },

  processRegister: async (req, res) => {
    const password = bcrypt.hashSync(req.body.password, 5);
    await db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: password,
    });
    console.log(
      "name:" +
        req.body.name +
        "email:" +
        req.body.email +
        "password:" +
        password
    );

    return res.redirect("/users/login");
  },

  logout: async (req, res) => {

  }
};

module.exports = userController;
