const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
  createProject,
  getProjects,
  addMember
} = require("../controllers/projectController");

// 🔥 NO ROLE RESTRICTION
router.post("/", auth, createProject);

router.get("/", auth, getProjects);

router.post("/add-member", auth, addMember);

module.exports = router;