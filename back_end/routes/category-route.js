const { Router } = require("express");

const {
  getAllCategory,
  creatCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category-controller");

const router = Router();

router.route("/").get(getAllCategory).post(creatCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);
deleteCategory;

module.exports = router;
