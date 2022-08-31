const express = require("express");
const router = express.Router();
const { projects } = require("./data/data.json");

// Setting up the root Route
// TODO - Move to routes.js
router.get("/", (req, res, next) => {
  console.log("DEBUG: home page");
  return res.render("index", { projects });
});

// Routes to the About Page
router.get("/about", (req, res, next) => {
  console.log("DEBUG: about page");
  return res.render("about");
});

// Routes to the Projects Page
router.get("/projects/:id", (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  if (project) {
    console.log("DEBUG: project page");
    return res.render("projects", { project });
  } else if (!project) {
    const err = new Error("Generic Error: Page not found");
    err.status = 500;
    console.error(`${err.status} - ${err.message}`);
    return next(err);
  }
});

router.use((req, res, next) => {
  console.log("DEBUG: global 404 error handler");
  const err = new Error("Generic Error: Page not found");
  next(err);
});

// Global error handler
router.use((err, req, res, next) => {
  console.log("DEBUG: global error handler");
  console.log(err.status);
  if (err.status === 404) {
    return res.render("error404", { error: err });
  } else {
    const err = new Error("Generic Error: Page not found");
    err.status = 500;
    return res.render("error500", { error: err });
  }
});

// Export the router
module.exports = router;
