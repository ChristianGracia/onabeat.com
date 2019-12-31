"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Song = require("../models/Song");

router.get("/all", function (req, res) {
  Song.find()
  // .sort({ date: -1 })
  .then(function (posts) {
    return res.json(posts);
  }).catch(function (err) {
    return res.status(404).json({ nosongsfound: "No videos found" });
  });
});

router.post("/create-song", function (req, res) {
  var newSong = new Song({
    name: req.body.name,
    artist: req.body.artist,
    songUrl: req.body.songUrl
  });

  newSong.save().then(function (songs) {
    return res.json(songs);
  });
});

router.delete("/:id", function (req, res) {
  console.log(req.body);
  Song.findById(req.params.id).then(function (song) {
    return song.remove().then(res.json({ success: "true" }));
  }).catch(function (err) {
    return res.status(404).json({ videonotfound: "No song found" });
  });
  res.send;
});
module.exports = router;