const { attendance } = require("../model/attendanceModel");

// check all attendance
const viewAttendance = async (req, res) => {
  const EmpAttendance = await attendance.find();

  res.status(200).json(EmpAttendance);
};

// Record Attendance

const recordAttendance = async (req, res) => {
  try {
    const { date } = req.body;
    const existingDate = await attendance.findOne(date);
    if (existingDate)
      return res.status(404).json("Attendance has already been recorded");
    const recordAttend = new attendance(req.body);
    const newAttend = await recordAttend.save();
    res.status(200).json(newAttend);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { viewAttendance, recordAttendance };
