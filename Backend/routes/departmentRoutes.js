const router = require("express").Router();
const {
  getAllDepartment,
  get_Single_Department,
  create_Department,
  update_Department,
  delete_Department,
} = require("../controller/departmentController");

router.get("/", getAllDepartment);
router.get("/:id", get_Single_Department);
router.post("/create", create_Department);
router.put("/:id", update_Department);
router.put("/:id", delete_Department);
module.exports = router;
