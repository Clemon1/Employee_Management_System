const {
  getAllTask,
  getSingleTask,
  employeeTask,
  createTask,
  createMany,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const router = require("express").Router();
const verifyJWT = require("../middleware/verifyJWT");

// const seat = 30;

// Array(seat)
//   .fill(0)
//   .forEach((i, e) => console.log(e + 1));
router.use(verifyJWT);
// Get all task
router.get("/all", getAllTask);
// Get single task
router.get("/:id", getSingleTask);
router.get("/all/:id", employeeTask);
// Create task
router.post("/create", createTask);
router.post("/create/many", createMany);
//Update task
router.put("/:id", updateTask);
// Delete Task
router.delete("/:id", deleteTask);

module.exports = router;
