var express = require('express');
var router = express.Router();

const ec = require('../controllers/routine');

/* POST: Add a new Exercise */
router.post('/add', ec.postAddExcercise );

/* GET: get all exercises */
router.get('/list', ec.getAllExercises );

/* GET: Get a set of exercises by filter */
router.get('/get', ec.getExercisesByFilter);

/* PUT: Modify exercise */
router.put('/update', ec.modifyExercisesById);

/* DELETE: Delete exercise */
router.delete('/delete', ec.deleteyExercisesById);

module.exports = router;
