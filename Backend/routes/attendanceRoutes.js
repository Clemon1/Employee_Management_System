const router = require("express").Router();
const {
  viewAttendance,
  recordAttendance,
} = require("../controller/attendanceController");

router.get("/", viewAttendance);
router.post("/create", recordAttendance);
module.exports = router;
