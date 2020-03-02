var express = require('express');
var router = express.Router();

const ec = require('../controllers/exercise');

/* GET: Render or page */
router.get('/', ec.getAddExcercise );

/* POST: Add a new Exercise */
router.post('/add', ec.postAddExcercise );

module.exports = router;
