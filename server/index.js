const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// logging middleware
app.use(morgan("dev"));

// json parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware to serve static files
app.use(express.static(path.join(__dirname, "..", "public")));

// api routes
app.use("/api", require("./api"));

// sends index.html
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// error handling
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
