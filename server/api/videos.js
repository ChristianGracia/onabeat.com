const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Video = require("../models/Video");

router.get("/all", (req, res) => {
  Video.find()
    // .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ novideosfound: "No videos found" }));
});

router.post("/create-video", (req, res) => {
  const newVideo = new Video({
    name: req.body.name,
    videoUrl: req.body.videoUrl,
    description: req.body.description
  });

  newVideo.save().then(videos => res.json(videos));
});

router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  Video.findById(req.params.id).then(video => {
    // delete
    video.remove().then(() => {
      res.json({ success: true });
    });
  });
});

module.exports = router;
