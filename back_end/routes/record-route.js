const { Router } = require("express");
const {
  getAllRecords,
  createRecord,
  updateRecord,
  deleteRecord,
} = require("../controllers/record-controller");

const router = Router();

router.route("/").get(getAllRecords)
// .post(createRecord);
// router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
