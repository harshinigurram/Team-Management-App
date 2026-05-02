const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  getAllTasks
} = require("../controllers/taskController");

router.get("/", auth, getAllTasks);       // Dashboard
router.post("/", auth, createTask);
router.get("/:id", auth, getTasks);
router.put("/:id", auth, updateTask);

module.exports = router;