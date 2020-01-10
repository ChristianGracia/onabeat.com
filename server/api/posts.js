"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Block = require("../models/Block");

router.get("/:id"), function (req, res) {

    Block.findById(req.params.id).then(function (block) {
        return res.json(block);

    }).catch(function (err) {
        return res.status(404).json({ postnotfound: "No post found" });
    });
    res.send;
};

module.exports = router;