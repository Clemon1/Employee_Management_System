const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    employee: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employees",
      },
    ],
    completion: {
      type: String,
      enum: ["Pending", "Started", "Completed", "Late Delivery"],
      default: "Pending",
    },
    reviewComment: {
      type: String,
    },
    review: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Low",
    },
    dateAssigned: {
      type: Date,
      required: true,
    },
    dateToDeliver: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };
