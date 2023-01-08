const { Task } = require("../model/taskModel");
const { Users } = require("../model/userModel");

// Getting all the task
const getAllTask = async (req, res) => {
  try {
    const allTask = await Task.find().populate("employee").exec();
    const countPending = await Task.find({ completion: "Pending" }).count();
    const countCompleted = await Task.find({ completion: "Completed" }).count();
    const countTotalTask = await Task.find().count();
    res
      .status(200)
      .json({ allTask, countPending, countCompleted, countTotalTask });
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
    // Custom Validation
    const {
      title,
      description,
      dateAssigned,
      dateToDeliver,
      employee,
      asignedBy,
    } = req.body;
    if (title === "") return res.status(404).json("Title cannot be empty");
    if (description === "")
      return res.status(404).json("Description cannot be empty");
    if (dateAssigned === "")
      return res.status(404).json("Date for the task must be assigned");
    if (dateToDeliver === "")
      return res.status(404).json("Date to deliver task must be assigned");
    if (employee === "")
      return res.status(404).json("An employee must be assigned");
    if (asignedBy === "")
      return res.status(404).json("Assign By cannot be empty");

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
    const delete_Task = await Task.findByIdAndDelete(req.params.id);
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
