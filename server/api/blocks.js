const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Block = require("../models/Block");

router.get("/all", (req, res) => {
    Block.find()
        // .sort({ date: -1 })
        .then(blocks => res.json(blocks))
        .catch(err => res.status(404).json({ noblocksfound: "No blocks found" }));
});

router.post(
    "/create-block", (req, res) => {
        const newBlock = new Gif({
            title: req.body.title,
            vid: req.body.vid,
            song: req.body.song,
            pic: req.body.pic,
            gif: req.body.gif
        });
        newBlock.save().then(blocks => res.json(blocks));
    }
);

router.delete("/:id", (req, res) => {
    console.log(req.body);
    Block.findById(req.params.id)
        .then(block => block.remove().then(res.json({ success: "true" })))
        .catch(err => res.status(404).json({ blocknotfound: "No block found" }));
    res.send;
});
module.exports = router;
