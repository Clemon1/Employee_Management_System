const { Task } = require("../model/taskModel");
const { Users } = require("../model/userModel");

// Getting all the task
const getAllTask = async (req, res) => {
  try {
    const allTask = await Task.find();
    res.status(200).json(allTask);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Get a single Task
const getSingleTask = async (req, res) => {
  try {
    const singleTask = await Task.find(req.params.id);
    res.status(200).json(singleTask);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Employee viewing thier own specific task
const viewTask = async (req, res) => {
  try {
    const currentUser = await Users.findById(req.params.id);

    const findTask = await Task.find({ Employee: currentUser._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(findTask);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//Create and Assign task for Employee
const createTask = async (req, res) => {
  try {
    const tasks = new Task(req.body);
    const newTask = await tasks.save();
    res.status(200).json(newTask);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Update Task information

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updateInfo = await Task.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).json(updateInfo);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Delete a single Task
const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Succesfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  getAllTask,
  getSingleTask,
  createTask,
  viewTask, // For Employees task dashboard
  updateTask,
  deleteTask,
};
