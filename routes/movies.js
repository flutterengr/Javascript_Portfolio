var express = require('express');
var router = express.Router();
const moviesController = require("../controllers/moviesController")


/* GET home page. */
router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.detail);
router.get('/create', moviesController.create);
router.post('/create', moviesController.premiere);
router.get('/edit/:id', moviesController.edit);
router.put('/edit/:id', moviesController.update);




module.exports = router;
