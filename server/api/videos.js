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
  // Video.findOne({ _id: req.video.id }).then();
});
module.exports = router;
