const { attendance } = require("../model/attendanceModel");

// check all attendance
const viewAttendance = async (req, res) => {
  try {
    const date = req.query.date;
    // const endDate = req.query.endDate;
    const EmpAttendance = await attendance
      .find({
        date: {
          $gte: new Date(date),
          // $lte: new Date(endDate),
          $lt: new Date(date).setDate(new Date(date).getDate() + 1),
        },
      })
      .populate("staff")
      .exec();
    res.status(200).json(EmpAttendance);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// Record Attendance
const recordAttendance = async (req, res) => {
  try {
    const { staff } = req.body;
    const existingStaff = await attendance.findOne({ staff });
    if (existingStaff)
      return res.status(404).json("Attendance has already been recorded");
    const recordAttend = new attendance(req.body);
    const newAttend = await recordAttend.save();
    res.status(200).json(newAttend);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { viewAttendance, recordAttendance };
