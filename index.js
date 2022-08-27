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
  if (!project) {
    res.status(404).render("page-not-found");
    next(err);
  } else {
    res.render("projects", { project });
  }
});

// Undefined Error Handler
router.use((req, res, next) => {
  res.status(404).render("page-not-found");
  next();
});

// Server Error Handler
router.use((err, req, res, next) => {
  if (err) {
    console.log("Generic Error Handler: ", err);
  }
  if (err.status === 404) {
    res.status(404);
    res.render("error", { error: err });
  } else {
    console.log(`Server Error Occured`);
    err.message = err.message || `Catastrophic Server Error Occured`;
    res.status(err.status || 500);
    res.render("error", { error: err });
  }
});

// Export the router
module.exports = router;
