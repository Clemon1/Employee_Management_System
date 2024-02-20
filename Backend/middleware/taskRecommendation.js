// Collaborative Filtering Logic
const mongoose = require("mongoose");
const { Task } = require("../model/taskModel");
const recommendTasksForEmployee = async (id) => {
  try {
    const completedTasksResult = await Task.aggregate([
      {
        $match: {
          employee: mongoose.Types.ObjectId(id),
        },
      },
      {
        $group: {
          _id: null,
          completedTasks: {
            $addToSet: "$_id",
          },
        },
      },
      {
        $project: {
          _id: 0,
          completedTasks: 1,
        },
      },
    ]).exec();

    const completedTaskIds = completedTasksResult[0]
      ? completedTasksResult[0].completedTasks
      : [];

    const recommendations = await Task.aggregate([
      {
        $match: {
          employee: {
            $ne: mongoose.Types.ObjectId(id),
          },
          _id: {
            $nin: completedTaskIds,
          },
        },
      },
      {
        $group: {
          _id: "$employee",
          tasks: {
            $push: "$$ROOT",
          },
        },
      },
    ]).exec();

    return recommendations;
  } catch (error) {
    throw error;
  }
};

module.exports = { recommendTasksForEmployee };
