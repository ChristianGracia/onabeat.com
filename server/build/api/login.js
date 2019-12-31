"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var User = require("../models/User");

router.post("/login-user", function (req, res) {
  var user = req.body;
  User.findOne(user).then(function (user) {
    return res.json(user);
  }).catch(function (err) {
    return res.status(404).json({ error: "error" });
  });
});

module.exports = router;