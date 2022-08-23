const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();

const mainRoutes = require("./routes");

appendFile.use(mainRoutes);

router.get("/", (req, res) => {
  console.log("page 1");
});
