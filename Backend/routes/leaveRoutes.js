const router = require("express").Router();
const {
  createLeave,
  updateLeave,
  employeeLeave,
  singleLeave,
  deleteLeave,
  viewAllLeave,
} = require("../controller/leaveController");

router.get("/leave", viewAllLeave); // admin

router.get("/leave/employee", employeeLeave); // employee

router.get("/leave/:id", singleLeave); // Single Employee

router.post("/create", createLeave); // Create Employee

router.put("/updateLeave", updateLeave); // Update Employee

router.delete("/deleteLeave", deleteLeave); // Delete Employee

module.exports = router;
