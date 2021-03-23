const db = require("../database/models");
const bycrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');

const userController = {

  showLogin: (req, res) => {
    res.render("login");
  },

  processLogin: async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()){
        console.log(errors)
        return res.render('users/login', {errors:errors.errors})
    }else{
        let user = await db.User.findOne({where:{email:req.body.email}}); //Encuentra un usuario con el email ingresado
        let compare = bycrypt.compareSync(req.body.password, user.password); //Comparo contraseña del req con la del usuario 
        if(!compare){ //Compare es falso imprime un nuevo error y redirige a login nuevamente
            newError = [
                {
                msg: "Credenciales inválidas",
                param: 'password',
                location: 'body'
                }
            ]
            return res.render('users/login', {errors:newError})
        }
        else { //Si compare es verdadero se le asinga una sesion al email loggeado y crea una cookie si no existe
            req.session.userLogged = userFound.email;
            if (req.body.remember!=undefined){
                res.cookie('userEmail',userFound.email,{maxAge:1000*60*60});
                };
       return res.redirect('/')
        }
        
    }

  },

  showRegister: (req, res) => {
    res.render("register");
  },

  processRegister: async (req, res) => {
    
    /*let errors = validationResult(req);
    console      
    if (!errors.isEmpty()){
        return res.render('users/register', {errors:errors.errors})
    } else {*/
        
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: bycrypt.hashSync(req.body.password, 10) 
        };
        console.log(user);
        const newUser = await db.User.create(user);
        return res.redirect('/')
   }
    
    
    
}

 




module.exports = userController;
