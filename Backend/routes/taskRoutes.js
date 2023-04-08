const {
  getAllTask,
  getSingleTask,
  employeeTask,
  createTask,
  createMany,
  empViewTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const router = require("express").Router();
const verifyJWT = require("../middleware/verifyJWT");

// router.use(verifyJWT);
// Get all task
router.get("/all", getAllTask);

// Get single task
router.get("/:id", getSingleTask);
router.get("/all/:id", employeeTask);

//single employee task
router.get("/employeeTask/:id", empViewTask);
// Create task
router.post("/create", createTask);
router.post("/create/many", createMany);
//Update task
router.put("/:id", updateTask);
// Delete Task
router.delete("/:id", deleteTask);

module.exports = router;
