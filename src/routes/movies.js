var express = require('express');
var router = express.Router();
const moviesController = require("../controllers/moviesController");
const admin = require("../middlewares/admin");
const validator = require('../middlewares/validator');

/* GET home page. */
router.get('/', moviesController.list);
router.get('/detail/:id',moviesController.detail);
router.get('/create', admin, moviesController.create);
router.post('/create', validator.create, moviesController.premiere);
router.get('/edit/:id', admin, moviesController.edit);
router.put('/edit/:id', moviesController.update);
router.delete('/delete/:id', admin, moviesController.delete);




module.exports = router;
