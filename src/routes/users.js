var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/login', userController.showLogin);
router.post('/login', userController.processLogin);
router.get('/register', userController.showRegister);
router.post('/register', userController.processRegister);
router.get('/logout', userController.logout);

module.exports = router;


//Gonza: Gonza estoy teniendo un problema con express-session, no me deja agregarle a req.session nada, no puedo agregarle req.session.user ni siquiera me usar la funcion destroy(req.session.destroy()), todo esto en la terminar me dice undefined tanto el user como el destroy, me lei la documentacion esta todo bien pero no puedo hacerla andar. Es el unico problema que estoy teniendo para antes de la entrega