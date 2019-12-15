const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

const videos = require("./api/videos");
const songs = require("./api/songs");
const login = require("./api/login");
const register = require("./api/register");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();

const staticFiles = express.static(path.join(__dirname, "../../client/build"));
app.use(staticFiles);

router.get("/all", (req, res) => {
  const titles = [
    { id: "1", name: "on a beat", url: "dededed" },
    { id: "2", name: "back end working", url: "d3dd3" },
    { id: "3", name: ":)", url: "ddidedh" }
  ];
  res.json(titles);
});

app.use(router);
app.use("/api/videos", videos);
app.use("/api/songs", songs);

app.use("/*", staticFiles);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
  console.log("mongodb: " + process.env.MONGO);
});

//local
const database = require("./config/keys").mongoURI;

//heroku
// const database = process.env.MONGO;
// console.log(database);

mongoose
  .connect(database)
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log("db connection error"));
