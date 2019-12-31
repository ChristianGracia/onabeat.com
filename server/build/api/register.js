"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var User = require("../models/User");

router.get("/", function (req, res) {
  res.json("register api route");
});

router.post("/create-user", function (req, res) {
  var newUser = new User({
    user: req.body.user,
    pass: req.body.pass
  });

  newUser.save().then(function (users) {
    return res.json(users);
  });
});

module.exports = router;