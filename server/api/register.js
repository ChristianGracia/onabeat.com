const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");

router.post("/", (req, res) => {
  const newUser = new User({
    user: req.body.user,
    pass: req.body.pass
  });

  newUser.save().then(users => res.json(users));
});

module.exports = router;
