var express = require('express');
var router = express.Router();

const ec = require('../controllers/exercise');

/* GET: Render or page */
router.get('/', ec.getAddExcercise );

/* POST: Add a new Exercise */
router.post('/add', ec.postAddExcercise );

/* GET: get all exercises */
router.get('/list', ec.getAllExercises );

/* GET: get set of exercises by filter */
router.get('/get', ec.getExercisesByFilter);


/* PUT: modify exercise */
router.put('/update', ec.modifyExercisesById);

/* DELETE: modify exercise */
router.delete('/delete', ec.deleteyExercisesById);

module.exports = router;
