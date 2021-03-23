var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/login', userController.showLogin);
router.post('/register', userController.processLogin);
router.get('/register', userController.showRegister);
router.post('/register', userController.processRegister);

module.exports = router;
