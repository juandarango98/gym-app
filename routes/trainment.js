var express = require("express");
var router = express.Router();

const tc = require("../controllers/trainment");

/* POST: Add a new Trainment */
router.post("/add", tc.postAddTrainment );

/* GET: get all Trainment */
router.get("/list", tc.getAllTrainments );

/* GET: Get a set of Trainment by filter */
router.get("/get", tc.getTrainmentsByFilter);

/* PUT: Modify Trainment */
router.put("/update", tc.modifyTrainmentsById);

/* DELETE: Delete Trainment */
router.delete("/delete", tc.deleteyTrainmentById);

module.exports = router;
