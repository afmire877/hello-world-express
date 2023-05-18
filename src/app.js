const express = require("express");

const app = express();

app.get("/hello", (_, res) => {
  console.log("We are in /hello");
  res.status(200).send("Hello World!");
});

app.get("/", (_, res) => {
  console.log("We are in /hello");
  res.status(200).send("We are on the homepage!");
});
module.exports = app;
