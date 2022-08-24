const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();

const mainRoutes = require("./routes");

appendFile.use(mainRoutes);

// // Setting up the root Route
// app.get("/", (req, res) => {
//   res.render("index");
// });
// app.get("/about", (req, res) => {
//   res.render("about");
// });
// app.get("/project:id", (req, res) => {
//   res.render("project");
// });

module.exports = router;
