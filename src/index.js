const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var age = Number(req.body.n1) / 15;
  res.send("Your age in dog years is : " + age + " dog years");
});

/*
app.get("/about", function (req, res) {
  res.send("<p> This is a aboutus </p><h1>aboutus</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<p> This is a contactme </p><h1>contactme</h1>");
});

app.get("/home", function (req, res) {
  res.send("<p> This is a home </p><h1>home</h1>");
});
*/
app.listen(port);
