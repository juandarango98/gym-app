var express = require('express');
var router = express.Router();

const rc = require('../controllers/routine');

/* POST: Add a new Routine */
router.post('/add', rc.postAddRoutine );

/* GET: get all routine */
router.get('/list', rc.getAllRoutines );

/* GET: Get a set of routines by filter */
router.get('/get', rc.getRoutinesByFilter);

/* PUT: Modify routines */
router.put('/update', rc.modifyRoutinesById);

/* DELETE: Delete routine */
router.delete('/delete', rc.deleteyRoutineById);

module.exports = router;

