const express = require("express");
// const routes = require("./routes");
const { projects } = require("./data/projects.json");
const app = express();

// Allows exress to use the Public folder as a Static folder
app.set("./static", express.static("./public"));

// Allows express to use pug templates
app.set("view engine", "pug");

// Setting up the root Route
// TODO - Move to routes.js
app.get("/", (req, res) => {
  res.render("index");
  next();
});

// Routes to the About Page
app.get("/about", (req, res) => {
  res.render("about");
  next();
});

// Routes to the Projects Page
app.get("/project:id", (req, res) => {
  if (projects[req.params.id]) {
    res.render("projects", {
      projects: projects[req.params.id],
    });
  } else {
    next();
  }
});

// Turn on Express server
app.listen(3000, () => {
  console.log("This application is running on localhost:3000");
});
