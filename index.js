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
router.get("/projects/:id", (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  if (project) {
    res.render("projects", { project });
  } else {
    const err = new Error("not found");
    err.status = 404;
    err.message = `Looks like the quote you requested doesn't exist`;
    res.render("error", { err });
  }
});

module.exports = router;
