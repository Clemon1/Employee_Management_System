const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employees",
    },
    reason: {
      type: String,
      required: true,
    },

    date_of_leave: {
      type: Date,
      required: true,
    },
    date_of_resumption: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Rejected", "Approved"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  },
);

const leave = mongoose.model("leave", leaveSchema);

module.exports = { leave };
