"use strict";

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Block = require("../models/Block");

router.get("/:id", (req, res) => {
    Block.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({ nopostfound: "No post found with that ID" })
        );
});

module.exports = router;