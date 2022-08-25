const express = require("express");
const router = express.Router();
const { projects } = require("./data/projects.json");

// Setting up the root Route
// TODO - Move to routes.js
router.get("/", (req, res, next) => {
  res.render("index", { projects });
  next();
});

// Routes to the About Page
router.get("/about", (req, res, next) => {
  res.render("about");
  next();
});

// Routes to the Projects Page
router.get("/projects:id", (req, res, next) => {
  if (projects[req.params.id]) {
    res.render("projects", {
      projects: projects[req.params.id],
    });
  } else {
    next();
  }
});

module.exports = router;
