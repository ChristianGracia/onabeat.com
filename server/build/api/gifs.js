"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Gif = require("../models/Gif");

router.get("/all", function (req, res) {
    Gif.find()
    // .sort({ date: -1 })
    .then(function (gifs) {
        return res.json(gifs);
    }).catch(function (err) {
        return res.status(404).json({ nogifsfound: "No gifs found" });
    });
});

router.post("/create-gif", function (req, res) {
    var newGif = new Gif({
        name: req.body.name,
        gifUrl: req.body.gifUrl,
        description: req.body.description
    });

    newGif.save().then(function (gifs) {
        return res.json(gifs);
    });
});

router.delete("/:id", function (req, res) {
    console.log(req.body);
    Gif.findById(req.params.id).then(function (gif) {
        return gif.remove().then(res.json({ success: "true" }));
    }).catch(function (err) {
        return res.status(404).json({ gifnotfound: "No gif found" });
    });
    res.send;
});
module.exports = router;