const express = require("express");
const router = express.Router();
const { projects } = require("./data/data.json");

// Setting up the root Route
router.get("/", (req, res, next) => {
  console.log("DEBUG: You are at the home page");
  return res.render("index", { projects });
});

// Routes to the About Page
router.get("/about", (req, res, next) => {
  console.log("DEBUG: You are at the about page");
  return res.render("about");
});

// Routes to the Projects Page
router.get("/projects/:id", (req, res, next) => {
  const projectId = req.params.id;
  const project = projects[projectId];
  if (project) {
    console.log(`DEBUG: You are at the project/${projectId} page`);
    return res.render("projects", { project });
  } else if (!project) {
    console.log(`DEBUG: Failed to find project/${projectId} page`);
    const err = new Error("Generic Error: Page not found");
    err.status = 404;
    return next(err);
  }
});

router.use((req, res, next) => {
  console.log("DEBUG: You've hit the error catch ");
  const err = new Error("Generic Error: Page not found");
  next(err);
});

// Global error handler
router.use((err, req, res, next) => {
  console.log("DEBUG: You've hit the error handler middleware");
  if (err.status == 404) {
    console.log("DEBUG: You've hit the 404 error if statement");
    return res.render("error404", { error: err });
  } else {
    console.log("DEBUG: You've hit the 500 error else statement");
    const err = new Error("Generic Error: This Page is not found");
    err.status = 500;
    return res.render("error500", { error: err });
  }
});

// Export the router
module.exports = router;
