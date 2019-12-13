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
      name: "Eyes",
      artist: "Tobias Why",
      songUrl: "https://open.spotify.com/embed/track/7y8qzwuKCN43ntWCCFEEGy"
    });

    newSong.save().then(songs => res.json(songs));
  }
);
module.exports = router;
