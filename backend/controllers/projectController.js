const Project = require("../models/Project");

// CREATE PROJECT (ALL USERS)
exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      title: req.body.title,
      createdBy: req.user.id
    });

    res.json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
};


// GET PROJECTS (ONLY USER'S OWN + ASSIGNED)
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      $or: [
        { createdBy: req.user.id },
        { teamMembers: req.user.id }
      ]
    });

    res.json(projects);

  } catch (err) {
    res.status(500).json(err.message);
  }
};


// ADD TEAM MEMBER
exports.addMember = async (req, res) => {
  try {
    const { projectId, userId } = req.body;

    const project = await Project.findByIdAndUpdate(
      projectId,
      { $addToSet: { teamMembers: userId } },
      { new: true }
    );

    res.json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
};