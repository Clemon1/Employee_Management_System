const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const {
  getAllEmployees,
  getSingleEmployees,
  createEmployee,
  countEmployees,
  loginEmployee,
  searchEmp,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employeeController");
// const a = require("../uploads/empProfilePics");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "../Backend/uploads/empProfilePics"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

//Get all Employees
router.get("/all", getAllEmployees);

// Search Employee
router.get("/search/:key", searchEmp);
// Count Employees
router.get("/count", countEmployees);

// Get single Employee
router.get("/:id", getSingleEmployees);
//Create new Employee
router.post("/create", upload.single("profile"), createEmployee);

// Login Employee
router.post("/login", loginEmployee);
// Update Employee
router.put("/:id", updateEmployee);

// Delete Employee
router.delete("/:id", deleteEmployee);

module.exports = router;
