var express = require('express');
var router = express.Router();
const moviesController = require("../controllers/moviesController")


/* GET home page. */
router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.detail);
router.get('/create', function(req, res, next) {
    res.render('create');
  });

/* Añadir nueva pelicula 
router.get('/create', productsController.create);
router.post('/create', upload.any(),  productsController.premiere);
*/


module.exports = router;
