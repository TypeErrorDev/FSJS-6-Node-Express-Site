const express = require("express");
const app = express();

// Allows exress to use the Public folder as a Static folder
app.use("./static", express.static("./public"));

// Allows express to use pug templates
app.set("view engine", "pug");

// Allows express to use the routes folder
const routes = require("./routes");

app.use(routes);

// Turn on Express server
app.listen(3000, () => {
  console.log("This application is running on localhost:3000");
});
