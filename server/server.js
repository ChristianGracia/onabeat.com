const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(cors({ origin: true, credentials: true }));

const videos = require("./api/videos");
const songs = require("./api/songs");
const login = require("./api/login");
const register = require("./api/register");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();

const staticFiles = express.static(path.join(__dirname, "../../client/build"));
app.use(staticFiles);

router.get("/api", (req, res) => {
  res.send(
    "Welcome to On a Beat API - By Christian Gracia - JSON routes: /api/songs/all /api/videos/all"
  );
});

app.use(router);
app.use("/api/videos", videos);
app.use("/api/songs", songs);
app.use("/api/login", login);
app.use("/api/register", register);

app.use("/*", staticFiles);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
  console.log("mongodb: " + process.env.MONGO);
});

//local
// const database = require("./config/keys").mongoURI;

// //heroku
const database = process.env.MONGO;

mongoose
  .connect(database)
  .then(() => console.log("connected to MongoDB"))
  .catch(err => console.log("db connection error"));
