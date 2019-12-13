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

router.post(
  "/create-video",

  (req, res) => {
    const newVideo = new Video({
      name: "teenie bikinis / neighbors",
      description: "Neighbor shows the boys around Menlo Park",
      videoUrl: "https://www.youtube.com/embed/QQg2xGt_OYA"
    });

    newVideo.save().then(videos => res.json(videos));
  }
);
module.exports = router;
