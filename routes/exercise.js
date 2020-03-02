var express = require('express');
var router = express.Router();

const ec = require('../controllers/exercise');

/* GET: Render or page */
router.get('/', ec.getAddProduct );

module.exports = router;
