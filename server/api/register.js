const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");

router.post("/", (req, res) => {
  const newUser = new Video({
    name: req.body.user,
    pass: req.body.pass
  });

  newUser.save().then(user => res.json(users));
});

module.exports = router;
