// "use strict";

// var express = require("express");
// var mongoose = require("mongoose");
// var bodyParser = require("body-parser");
// var cors = require("cors");
// var path = require("path");

// var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// var router = express.Router();

// var staticFiles = express.static(path.join(__dirname, "../../client/build"));
// app.use(staticFiles);

// router.get("/all", function (req, res) {
//   var videos = [{ id: "1", name: "on a beat", url: "dededed" }, { id: "2", name: "back end working", url: "d3dd3" }, { id: "3", name: ":)", url: "ddidedh" }];
//   res.json(videos);
// });

// app.use(router);

// app.use("/*", staticFiles);

// app.set("port", process.env.PORT || 3001);
// app.listen(app.get("port"), function () {
//   console.log("Listening on " + app.get("port"));
// });