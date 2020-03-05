const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Header = require("../models/Header");

router.post("/create-header", (req, res) => {
  const newHeader = new Gif({
    header: req.body.HeaderString
  });

  newHeader.save().then(header => res.json(header));
});

module.exports = router;
