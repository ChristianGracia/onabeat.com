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

module.exports = router;
