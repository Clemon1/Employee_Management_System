const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    profile: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    description: {
      type: String,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
    },
    role: {
      type: String,
      enum: ["Employee"],
      default: "Employee",
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employees = mongoose.model("Employees", employeeSchema);

module.exports = { Employees };
