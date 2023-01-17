const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    employee: [
      {
        staff: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Employees",
        },
        attendance: {
          type: String,
          enum: ["Present", "Absent"],
        },
      },
    ],
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  },
);

const attendance = mongoose.model("attendance", attendanceSchema);
module.exports = { attendance };
