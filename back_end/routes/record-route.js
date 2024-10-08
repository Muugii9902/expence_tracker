const { Router } = require("express");
const {
  getAllRecords,
  getInfo,
  getChartData
  // createRecord,
  // updateRecord,
  // deleteRecord,
} = require("../controllers/record-controller");

const router = Router();

router.route("/info").get(getInfo)
router.route("/chart").get(getChartData)
router.route("/").get(getAllRecords)
// .post(createRecord);
// router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
