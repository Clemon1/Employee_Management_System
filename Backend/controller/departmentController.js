const { department } = require("../model/departmentModel");
const { Employees } = require("../model/employeeModel");
// Getting All departments
const getAllDepartment = async (req, res) => {
  try {
    // Padgination query
    const { page = 1, limit = 6 } = req.query;
    const skip = limit * (page - 1);
    const alldepartment = await department
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
    const countDepartment = await department.find().count();
    const departmentAll = await department.find();
    const totalPage = (await department.find().count()) / limit;

    res
      .status(200)
      .json({ countDepartment, alldepartment, totalPage, departmentAll });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Get single Department
const get_Single_Department = async (req, res) => {
  try {
    const id = req.params.id;
    const singleDepartment = await department.findById(id);
    const empDept = await Employees.find({ department: id });
    res.status(200).json({ singleDepartment, empDept });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
//get all employee in various department

// Create Department
const create_Department = async (req, res) => {
  try {
    // Checking for existing department
    const { name, description } = req.body;
    const existingDepartment = await department.findOne({ name });
    if (existingDepartment) {
      return res.status(400).json("Department already exist");
    }
    // Validating name and description
    if (!name || !description) {
      return res.status(400).json("Name or description cannot be empty");
    }
    // Creating the department
    const newDepartment = new department(req.body);
    const saveDepartment = await newDepartment.save();
    res.status(200).json(saveDepartment);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Update department
const update_Department = async (req, res) => {
  try {
    const id = req.params.id;
    const updateDept = await department.findByIdAndUpdate(id, {
      $set: req.body,
    });
    res.status(200).json(updateDept);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//Delete department
const delete_Department = async (req, res) => {
  try {
    const id = req.params.id;
    const deletingDepartment = await department.findByIdAndDelete(id);
    res.status(200).json("Deleted Succesfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
module.exports = {
  getAllDepartment,
  get_Single_Department,
  create_Department,
  update_Department,
  delete_Department,
};
