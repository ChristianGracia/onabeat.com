const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const publicPath = path.join(__dirname, "/client", "public");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up!");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// const database = require("./config/keys").mongoURI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// mongoose
//   .connect(database, options)
//   .then(() => console.log("connected to MongoDB"))
//   .catch(err => console.log("db connection error"));

app.get("/all", cors(), (req, res) => {
  res.json({ hi: "cors works" });
  console.log("hit");
});
