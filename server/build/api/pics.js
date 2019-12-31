"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Pic = require("../models/Pic");

router.get("/all", function (req, res) {
    Pic.find()
    // .sort({ date: -1 })
    .then(function (posts) {
        return res.json(posts);
    }).catch(function (err) {
        return res.status(404).json({ nopicsfound: "No pics found" });
    });
});

router.post("/create-pic", function (req, res) {
    var newPic = new Pic({
        name: req.body.name,
        description: req.body.description,
        picUrl: req.body.picUrl
    });

    newPic.save().then(function (pics) {
        return res.json(pics);
    });
});

router.delete("/:id", function (req, res) {
    console.log(req.body);
    Pic.findById(req.params.id).then(function (pic) {
        return pic.remove().then(res.json({ success: "true" }));
    }).catch(function (err) {
        return res.status(404).json({ picnotfound: "No pic found" });
    });
    res.send;
});
module.exports = router;