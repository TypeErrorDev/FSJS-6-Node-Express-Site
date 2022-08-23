const express = require("express");
const app = express();

// Allows express to use pug templates
app.set("view engine", "pug");

// Setting up the root Route
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/project:id", (req, res) => {
  res.render("project");
});

// Turn on Express server
app.listen(3000, () => {
  console.log("This application is running on localhost:3000");
});
