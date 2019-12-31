"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Block = require("../models/Block");

router.get("/all", function (req, res) {
    Block.find()
    // .sort({ date: -1 })
    .then(function (blocks) {
        return res.json(blocks);
    }).catch(function (err) {
        return res.status(404).json({ noblocksfound: "No blocks found" });
    });
});

router.post("/create-block", function (req, res) {
    var newBlock = new Block({
        title: req.body.title,
        vid: req.body.vid,
        song: req.body.song,
        pic: req.body.pic,
        gif: req.body.gif
    });
    newBlock.save().then(function (blocks) {
        return res.json(blocks);
    });
});

router.delete("/:id", function (req, res) {
    console.log(req.body);
    Block.findById(req.params.id).then(function (block) {
        return block.remove().then(res.json({ success: "true" }));
    }).catch(function (err) {
        return res.status(404).json({ blocknotfound: "No block found" });
    });
    res.send;
});
module.exports = router;