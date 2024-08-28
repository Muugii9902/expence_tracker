const {Router} = require("express");
const { getAllUser, creatUser, updateUser, deleteUser } = require("../controllers/user-controllers");

const router = Router()

router.route("/").get(getAllUser).post(creatUser);
router.route("/:id").put(updateUser).delete(deleteUser)



module.exports =router