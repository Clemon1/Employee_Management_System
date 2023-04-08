const mongoose = require("mongoose");

const payrollSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employees",
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const payroll = mongoose.model("payroll", payrollSchema);

module.exports = payroll;
