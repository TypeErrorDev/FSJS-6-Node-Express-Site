const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Allows exress to use the Public folder as a Static folder
app.use("/static", express.static("public"));

// Allows express to use pug templates
app.set("view engine", "pug");

// Allows express to use the routes folder
const routes = require(".");
app.use(routes);

// Turn on Express server
app.listen(3001, () => {
  console.log("This application is running on localhost:3001");
});
