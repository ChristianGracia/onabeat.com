const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const database = require("./config/keys").mongoURI;

mongoose
  .connect(database)
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log("db connection error"));

app.get("/", (req, res) => res.send("server is up"));

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/all", cors(), (req, res) => {
  res.json({ hi: "cors works" });
  console.log("hit");
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
