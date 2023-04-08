const router = require("express").Router();
const {
  findPayroll,
  findSinglePayroll,
  createPayroll,
} = require("../controller/payroll");
router.get("/", findPayroll);
router.get("/:id", findSinglePayroll);
router.post("/create", createPayroll);
module.exports = router;
