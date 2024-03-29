const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Pic = require("../models/Pic");

router.get("/all", (req, res) => {
  Pic.find()
    // .sort({ date: -1 })
    .then(pics => res.json(pics))
    .catch(err => res.status(404).json({ nopicsfound: "No pics found" }));
});

router.post(
  "/create-pic",

  (req, res) => {
    const newPic = new Pic({
      name: req.body.name,
      description: req.body.description,
      picUrl: req.body.picUrl
    });

    newPic.save().then(pics => res.json(pics));
  }
);

router.delete("/:id", (req, res) => {
  console.log(req.body);
  Pic.findById(req.params.id)
    .then(pic => pic.remove().then(res.json({ success: "true" })))
    .catch(err => res.status(404).json({ picnotfound: "No pic found" }));
});
module.exports = router;
