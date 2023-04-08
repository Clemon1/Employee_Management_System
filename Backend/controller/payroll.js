const payroll = require("../model/payrollModel");

// find payment based on the date

const findPayroll = async (req, res) => {
  try {
    const findPayroll = await payroll.find().populate("employee");
    res.status(200).json(findPayroll);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// findSinglePayroll
const findSinglePayroll = async (req, res) => {
  try {
    const id = req.params.id;
    const findPayroll = await payroll.findById(id).populate("employee");
    res.status(200).json(findPayroll);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// create payroll
const createPayroll = async (req, res) => {
  try {
    const newPayroll = new payroll(req.body);
    const payCustomer = await newPayroll.save();
    res.status(200).json(payCustomer);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { findPayroll, findSinglePayroll, createPayroll };
