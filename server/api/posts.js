"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Block = require("../models/Block");

router.get("/:id"), function (req, res) {

    Block.findById(req.params.id).then(blocks => res.json(blocks))
        .catch(err => res.status(404).json({ nopostsfound: "No post found" }));
};

module.exports = router;