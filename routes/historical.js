var express = require("express");
var router = express.Router();

const hc = require("../controllers/historical");

/* POST: Add a new Historical */
router.post("/add", hc.postAddHistorical );

/* GET: get all Historical */
router.get("/list", hc.getAllHistoricals );

/* GET: Get a set of Historical by filter */
router.get("/get", hc.getHistoricalsByFilter);

/* PUT: Modify Historical */
router.put("/update", hc.modifyHistoricalById);

/* DELETE: Delete Historical */
router.delete("/delete", hc.deleteyHistoricalById);

module.exports = router;
