const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");

router.post("/", (req, res) => {
  //   User.find()
  //     // .sort({ date: -1 })
  //     .then(posts => res.json(posts))
  //     .catch(err => res.status(404).json({ nosongsfound: "No videos found" }));
  console.log(req.body);
});

module.exports = router;
