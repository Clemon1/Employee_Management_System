const {
  getAllTask,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");
const router = require("express").Router();

// Get all task
router.get("/all", getAllTask);
// Get single task
router.get("/:id", getSingleTask);
// Create task
router.post("/create", createTask);
//Update task
router.put("/:id", updateTask);
// Delete Task
router.delete("/:id", deleteTask);

module.exports = router;
