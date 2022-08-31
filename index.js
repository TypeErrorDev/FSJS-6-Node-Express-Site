const express = require("express");
const router = express.Router();
const { projects } = require("./data/projects.json");

// Setting up the root Route
// TODO - Move to routes.js
router.get("/", (req, res, next) => {
  console.log("DEBUG: home page");
  res.render("index", { projects });
  next();
});

// Routes to the About Page
router.get("/about", (req, res, next) => {
  console.log("DEBUG: about page");
  res.status(500);
  res.render("about");
  next();
});

// Routes to the Projects Page
router.get("/projects/:id", (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  if (project) {
    console.log("DEBUG: project page");
    res.render("projects", { project });
  } else if (!project) {
    next();
  }
});

// Global error handler
router.use((err, req, res, next) => {
  if (res.status === 500) {
    console.log("DEBUG: Server error handler");
    err.message = "Generic Error: " + err.message;
    res.status(500);
    res.render("error500", { error: err });
  }
  if (res.status === 404) {
    console.log("DEBUG: global 404 error handler");
    const err = new Error("Generic Error: Page not found");
    res.status(404);
    res.render("error404", { error: err });
  }
});
// router.use((req, res, next) => {
//   console.log("DEBUG: global 404 error handler");
//   const err = new Error("Generic Error: Page not found");
//   res.status(404);
//   res.render("error404", { error: err });
// });

// Export the router
module.exports = router;
