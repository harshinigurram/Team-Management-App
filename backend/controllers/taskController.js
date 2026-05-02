const Task = require("../models/Task");

// CREATE TASK (AUTO ASSIGN TO USER)
exports.createTask = async (req, res) => {
  try {
    let { title, projectId, assignedTo } = req.body;

    if (!title) return res.status(400).json("Task title required");

    // 🔥 AUTO ASSIGN
    if (!assignedTo) {
      assignedTo = req.user.id;
    }

    const task = await Task.create({
      title,
      projectId,
      assignedTo,
      status: "Todo"
    });

    res.json(task);

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// GET TASKS (ONLY USER'S TASKS)
exports.getTasks = async (req, res) => {
  try {
    const projectId = req.params.id;

    const tasks = await Task.find({
      projectId,
      assignedTo: req.user.id
    }).populate("assignedTo", "name");

    res.json(tasks);

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// UPDATE TASK (ONLY OWN TASK)
exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    if (!task) return res.status(404).json("Task not found");

    if (task.assignedTo.toString() !== req.user.id) {
      return res.status(403).json("Not allowed");
    }

    const updated = await Task.findByIdAndUpdate(
      taskId,
      { ...req.body, status: req.body.status || "Todo" },
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// DASHBOARD (ONLY USER TASKS)
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      assignedTo: req.user.id
    });

    res.json(tasks);

  } catch (err) {
    res.status(500).json(err.message);
  }
};