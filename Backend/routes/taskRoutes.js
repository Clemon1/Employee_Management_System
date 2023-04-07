const {
  getAllTask,
  getSingleTask,
  createTask,
  empViewTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const router = require("express").Router();
// const seat = 30;

// Array(seat)
//   .fill(0)
//   .forEach((i, e) => console.log(e + 1));

// Get all task
router.get("/all", getAllTask);

// Get single task
router.get("/:id", getSingleTask);

//single employee task
router.get("/employeeTask/:id", empViewTask);
// Create task
router.post("/create", createTask);
//Update task
router.put("/:id", updateTask);
// Delete Task
router.delete("/:id", deleteTask);

module.exports = router;
