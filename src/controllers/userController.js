const db = require("../database/models");
const bcrypt = require("bcryptjs");

const userController = {
  showLogin: (req, res) => {
    res.render("login");
  },

  processLogin: async (req, res) => {
    const pass = req.body.password;
    const user = await db.User.findOne( { where: {email: req.body.email},} ); 
    const compare = bcrypt.compareSync(pass, user.password); //Comparo contraseña del req con la de los usuarios

    if (user && compare) {
      req.session.user = user; //Con express-session asigno a la sesion el email del usuario encontrado
      if (req.body.remember != undefined) {
        res.cookie("user_id", user.id , { maxAge: 1000 * 60 * 60 });
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

    return res.redirect("/users/login");
  },

  logout: async (req, res) => {
    req.session.destroy();
    res.clearCookie('user_id');
    return res.redirect('/users/login');
  }
};

module.exports = userController;
