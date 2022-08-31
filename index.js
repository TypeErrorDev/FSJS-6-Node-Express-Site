const { response } = require("express");
const express = require("express");
const router = express.Router();
const { projects } = require("./data/projects.json");

// Setting up the root Route
// TODO - Move to routes.js
router.get("/", (req, res, next) => {
  console.log("DEBUG: home page");
  return res.render("index", { projects });
});

// Routes to the About Page
router.get("/about", (req, res, next) => {
  console.log("DEBUG: about page");
  //  res.status(500); // For reviewer to test 500 - Internal Server Error
  return res.render("about");
  // next(err); // pass the error to the next error handler
});

// Routes to the Projects Page
router.get("/projects/:id", (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  if (project) {
    console.log("DEBUG: project page");
    return res.render("projects", { project });
  } else if (!project) {
    next();
  }
});

// Global error handler
router.use((err, req, res, next) => {
  if (err) {
    console.log("DEBUG: Server error handler");
    err.message = "Generic Error: " + err.message;
    return res.render("error500", { error: err });
  }
});
router.use((req, res, next) => {
  console.log("DEBUG: global 404 error handler");
  const err = new Error("Generic Error: Page not found");
  return res.status(404).render("error404", { error: err });
});

// Export the router
module.exports = router;
