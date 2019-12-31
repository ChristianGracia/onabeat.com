"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var cors = require("cors");

var Video = require("../models/Video");

router.get("/all", function (req, res) {
  Video.find()
  // .sort({ date: -1 })
  .then(function (posts) {
    return res.json(posts);
  }).catch(function (err) {
    return res.status(404).json({ novideosfound: "No videos found" });
  });
});

router.post("/create-video", function (req, res) {
  var newVideo = new Video({
    name: req.body.name,
    videoUrl: req.body.videoUrl,
    description: req.body.description
  });

  newVideo.save().then(function (videos) {
    return res.json(videos);
  });
});

router.delete("/:id", function (req, res) {
  console.log(req.body);
  Video.findById(req.params.id).then(function (video) {
    return video.remove().then(res.json({ success: "true" }));
  }).catch(function (err) {
    return res.status(404).json({ videonotfound: "No video found" });
  });
  res.send;
});

module.exports = router;