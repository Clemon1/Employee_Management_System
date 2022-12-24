const mongoose = require("mongoose");
const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
    },
    teamLeader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employees",
    },
  },
  { timestamps: true },
);

const department = mongoose.model("department", departmentSchema);

module.exports = { department };
