const { Employees } = require("../model/employeeModel");
const bcrypt = require("bcrypt");
const { Task } = require("../model/taskModel");
const fs = require("fs");
const { profile } = require("console");

// Get all Employees

const getAllEmployees = async (req, res) => {
  try {
    const { page = 1, limit = 4 } = req.query;
    const allEmployees = await Employees.find()
      .populate("department")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    const total = await Employees.find().count();
    const totalPages = (await Employees.find().count()) / limit;
    const empAll = await Employees.find();

    res.status(200).json({ allEmployees, total, totalPages, empAll });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Count employees
const countEmployees = async (req, res) => {
  const countEmp = await Employees.find().count();
  const allEmp = await Employees.find();
  const latestEmp = await Employees.find()
    .populate("department")
    .sort({ createdAt: -1 })
    .limit(4);
  const findMale = await Employees.find({ gender: "Male" }).count();
  const findFemale = await Employees.find({ gender: "Female" }).count();
  res.status(200).json({ countEmp, allEmp, latestEmp, findMale, findFemale });
};

// Get a single Employee
const getSingleEmployees = async (req, res) => {
  try {
    const id = req.params.id;
    const singleEmployees = await Employees.findById(id)
      .populate("department")
      .exec();
    res.status(200).json(singleEmployees);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Employee own specific task
const empViewTask = async (req, res) => {
  try {
    const singleEmployee = await Employees.findById(req.params.id);

    const findTask = await Task.find({ employee: singleEmployee._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(findTask);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Search Employee
const searchEmp = async (req, res) => {
  try {
    const search = req.params.key;
    const searchEmployee = await Employees.find({
      $or: [
        { fullname: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    }).populate("department");
    if (!searchEmployee) {
      res.status(400).json("");
    }
    res.status(200).json(searchEmployee);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//Create an Account for Employees
const createEmployee = async (req, res) => {
  try {
    const { email, fullname, password, gender, department, phoneNumber } =
      req.body;

    if (
      !email ||
      !fullname ||
      !password ||
      !gender ||
      !department ||
      !phoneNumber
    ) {
      return res
        .status(400)
        .json("Details must be complete to register Employee");
    }
    const existingEmail = await Employees.findOne({ email });
    if (existingEmail) {
      // Checking for existing Email on database to avoid registering with same email
      return res.status(400).json("This user has an account");
    }

    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(req.body.password, salt); // Hashing the password
    const user = new Employees({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hashPassword,
      profile: req.file.filename,
      gender: req.body.gender,
      department: req.body.department,
      phoneNumber: req.body.phoneNumber,
    });
    const newUser = await user.save();

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Login Employees

const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Employees.findOne({ email });
    if (!user) {
      return res.status(400).json("Email doesnt have an account");
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json("Invalid email or password");
    }
    res.status(200).json("Logged in Successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Update Employee information

const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const updateInfo = await Employees.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).json(updateInfo);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Delete a single Employee
const deleteEmployee = async (req, res) => {
  try {
    const closeAccount = await Employees.findByIdAndDelete(req.params.id);
    // fs.unlink(`../uploads/empProfilePics/${closeAccount.profile}`, (err) => {
    //   if (err) {
    //     res.status(404).json(err.message);
    //   }
    // });
    res.status(200).json("Deleted Succesfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  getAllEmployees,
  getSingleEmployees,
  empViewTask,
  createEmployee,
  searchEmp,
  loginEmployee,
  countEmployees,
  updateEmployee,
  deleteEmployee,
};
