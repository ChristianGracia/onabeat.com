"use strict";

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(cors({ origin: true, credentials: true }));

var videos = require("./api/videos");
var songs = require("./api/songs");
var login = require("./api/login");
var register = require("./api/register");
var pics = require("./api/pics");
var gifs = require("./api/gifs");
var blocks = require("./api/blocks");
var posts = require("./api/posts");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var router = express.Router();

var staticFiles = express.static(path.join(__dirname, "../../client/build"));
app.use(staticFiles);

router.get("/api", function (req, res) {
  res.send("Welcome to On a Beat API - By Christian Gracia - JSON routes: /api/blocks/all /api/songs/all /api/videos/all");
});

app.use(router);
app.use("/api/videos", videos);
app.use("/api/songs", songs);
app.use("/api/gifs", gifs);
app.use("/api/pics", pics);
app.use("/api/blocks", blocks);
app.use("/api/login", login);
app.use("/api/register", register);
app.use("/api/posts", posts)

app.use("/*", staticFiles);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), function () {
  console.log("Listening on " + app.get("port"));
  console.log("mongodb: " + process.env.MONGO);
});

//local
// const database = require("./config/keys").mongoURI;

// //heroku
var database = process.env.MONGO;

mongoose.connect(database).then(function () {
  return console.log("connected to MongoDB");
}).catch(function (err) {
  return console.log("db connection error");
});