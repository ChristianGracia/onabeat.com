const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const database = require("./config/keys").mongoURI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(database, options)
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log("db connection error"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// app.use(express.static(path.join(__dirname, "./client/public")));

// app.get("*", function(_, res) {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"), function(
//     err
//   ) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.get("/", (req, res) => res.send("server is up"));

app.get("/all", cors(), (req, res) => {
  res.json({ hi: "cors works" });
  console.log("hit");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
