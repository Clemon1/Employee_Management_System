const router = require("express").Router();
const {
  createLeave,
  updateLeave,
  employeeLeave,
  singleLeave,
  deleteLeave,
  viewAllLeave,
} = require("../controller/leaveController");

router.get("/", viewAllLeave); // admin

router.get("/employee/:id", employeeLeave); // employee own Leave

router.get("/:id", singleLeave); // Single Leave

router.post("/create", createLeave); // Create Leave

router.put("/:id", updateLeave); // Update Leave

router.delete("/:id", deleteLeave); // Delete Employee

module.exports = router;
