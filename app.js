const express = require("express");
<<<<<<< HEAD
=======
// const routes = require("./routes");
const { projects } = require("./data/data.json");
>>>>>>> parent of 70d19a0 (FIX: project to projects)
const app = express();

// Allows exress to use the Public folder as a Static folder
app.use("./static", express.static("./public"));

// Allows express to use pug templates
app.set("view engine", "pug");

// Allows express to use the routes folder
const routes = require("./routes");

<<<<<<< HEAD
app.use(routes);
=======
// Routes to the About Page
app.get("/about", (req, res) => {
  res.render("about");
  next();
});

// Routes to the Projects Page
app.get("/project:id", (req, res) => {
  if (projects[req.params.id]) {
    res.render("project", {
      project: projects[req.params.id],
    });
  } else {
    next();
  }
});
>>>>>>> parent of 70d19a0 (FIX: project to projects)

// Turn on Express server
app.listen(3000, () => {
  console.log("This application is running on localhost:3000");
});
