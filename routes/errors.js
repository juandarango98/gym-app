var express = require('express');
var router = express.Router();

const ec = require('../controllers/errors');

/* GET: Render 404 page*/
router.get('/exercises', ec.get404 );

module.exports = router;
