const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Song = require("../models/Song");

router.get("/all", (req, res) => {
  Song.find()
    // .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nosongsfound: "No videos found" }));
});

router.post(
  "/create-song",

  (req, res) => {
    const newSong = new Song({
      name: req.body.name,
      artist: req.body.artist,
      songUrl: req.body.songUrl
    });

    newSong.save().then(songs => res.json(songs));
  }
);

router.delete("/:id", (req, res) => {
  console.log(req.body);
  Song.findById(req.params.id)
    .then(song => song.remove().then(res.json({ success: "true" })))
    .catch(err => res.status(404).json({ videonotfound: "No song found" }));
  res.send;
});
module.exports = router;
