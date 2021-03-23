const db = require("../database/models");

const userController = {

  showLogin: (req, res) => {
    res.render("login");
  },

  processLogin: async (req, res) => {

  },

  showRegister: (req, res) => {
    res.render("register")
  },

  processRegister: async (req, res) => {

 }


};

module.exports = userController;
