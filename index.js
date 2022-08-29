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
    next();
  } else {
    res.status(404);
    res.send(error404);
  }
});

// // Server Error Handler
router.use((err, req, res, next) => {
  console.log(`Holy Moly! Server Error Occured!! Line 40`);
  err.message = `Catastrophic Server Error Occured`;
  res.status(500);
  res.render("error500", { error: err });
});

// Export the router
module.exports = router;
