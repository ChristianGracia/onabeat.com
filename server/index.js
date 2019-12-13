const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const router = express.Router();

const staticFiles = express.static(path.join(__dirname, "../../client/build"));
app.use(staticFiles);

router.get("/all", (req, res) => {
  const videos = [
    { id: "1", name: "on a beat", url: "dededed" },
    { id: "2", name: "back end working", url: "d3dd3" },
    { id: "3", name: ":)", url: "ddidedh" }
  ];
  res.json(videos);
});

app.use(router);

app.use("/*", staticFiles);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
