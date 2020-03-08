const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Header = require("../models/Header");

router.get("/", (req, res) => {
  res.send({ hi: "hi" });
});

router.post("/create-header", (req, res) => {
  const newHeader = new Header({
    headerString: req.body.headerString
  });

  newHeader.save().then(header => res.json(header));
});

module.exports = router;
