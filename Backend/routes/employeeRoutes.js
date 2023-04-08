const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const {
  getAllEmployees,
  getSingleEmployees,
  empViewTask,
  createEmployee,
  countEmployees,
  loginEmployee,
  searchEmp,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employeeController");
// const a = require("../uploads/empProfilePics");

const verifyJWT = require("../middleware/verifyJWT");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "../Backend/uploads/empProfilePics"),
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// router.use(verifyJWT);

//Get all Employees
router.get("/all", getAllEmployees);

// employee task
router.get("/employeeTask/:id", empViewTask);

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
//provide employee with access token and refresh tokens

// Delete Employee
router.delete("/:id", deleteEmployee);

module.exports = router;
