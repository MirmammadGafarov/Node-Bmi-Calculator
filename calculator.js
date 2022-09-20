const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("Cavab: " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var netice = height / weight;
  res.send("Your BMI is " + netice);
});

app.get("/hesablama", function (req, res) {
  res.sendFile(__dirname + "/hesablama.html");
});

app.post("/hesablama", function (req, res) {
  var reqem1 = Number(req.body.reqem1);
  var reqem2 = Number(req.body.reqem2);
  var cixaris = reqem1 - reqem2;

  res.send("sizin cavabiniz budur: " + cixaris);
});

app.get("/vurma", function (req, res) {
  res.sendFile(__dirname + "/vurma.html");
});

app.post("/vurma", function (req, res) {
  var qutu1 = Number(req.body.qutu1);
  var qutu2 = Number(req.body.qutu2);
  var vur = qutu1 * qutu2;
  res.send("vurma neticsei " + vur);
});

app.listen(3000, function () {
  console.log("server 3000 portunda basladildi");
});
