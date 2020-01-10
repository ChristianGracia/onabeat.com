const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({ origin: true, credentials: true }));

const videos = require("./api/videos");
const songs = require("./api/songs");
const login = require("./api/login");
const register = require("./api/register");
const pics = require("./api/pics");
const gifs = require("./api/gifs");
const blocks = require("./api/blocks");
const posts = require("./api/posts");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();

const staticFiles = express.static(path.join(__dirname, "../../client/build"));
app.use(staticFiles);

router.get("/api", (req, res) => {
  res.send(
    "Welcome to On a Beat API - By Christian Gracia - JSON routes: /api/blocks/all /api/songs/all /api/videos/all"
  );
});

app.use(router);
app.use("/api/videos", videos);
app.use("/api/songs", songs);
app.use("/api/gifs", gifs);
app.use("/api/pics", pics);
app.use("/api/blocks", blocks);
app.use("/api/login", login);
app.use("/api/register", register);
app.use("/api/posts", posts);

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
