const express = require("express");

const app = express();

// Middlewares

app.use((req, res, next) => {
  console.log(req.ip);
  next();
});

// Routes
app.get("/", (req, res, next) => {
  res.send("Welcome to home page");
});

app.get("/user/:id/:postId", (req, res, next) => {
//   console.log(req.params);
//   console.log(req.get("Host"));
//   console.log(req.query);
  res.send("User Page");
});

module.exports = app;
