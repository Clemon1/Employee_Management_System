const { leave } = require("../model/leaveModel");
const { Employees } = require("../model/employeeModel");

// Get Leave
const viewAllLeave = async (req, res) => {
  try {
    const viewAll = await leave
      .find({})
      .sort({ createdAt: -1 })
      .populate("employee")
      .exec();
    res.status(200).json(viewAll);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Employee to view their own leave request
const employeeLeave = async (req, res) => {
  try {
    const employee = await Employees.findById(req.params.id);
    const findLeave = await leave
      .find({ employee: employee._id })
      .populate("employee")
      .exec();
    res.status(200).json(findLeave);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Create Leave
const createLeave = async (req, res) => {
  try {
    const leaveRequest = new leave(req.body);
    const newLeave = await leaveRequest.save();
    res.status(200).json(newLeave);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
// Find by ID
const singleLeave = async (req, res) => {
  try {
    const singleEmpLeave = await leave
      .findById(req.params.id)
      .populate("employee")
      .exec();
    res.status(200).json(singleEmpLeave);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// UpdateLeave
const updateLeave = async (req, res) => {
  try {
    const id = req.params.id;
    const updateLeave = await leave.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true },
    );
    res.status(200).json(updateLeave);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// deleteLeave
const deleteLeave = async (req, res) => {
  try {
    const id = req.params.id;
    const updateLeave = await leave.findByIdAndDelete(id);
    res.status(200).json(updateLeave);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  viewAllLeave,
  createLeave,
  employeeLeave,
  singleLeave,
  updateLeave,
  deleteLeave,
};
