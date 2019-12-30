const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Gif = require("../models/Gif");

router.get("/all", (req, res) => {
    Gif.find()
        // .sort({ date: -1 })
        .then(gifs => res.json(gifs))
        .catch(err => res.status(404).json({ nogifsfound: "No gifs found" }));
});

router.post(
    "/create-gif",

    (req, res) => {
        const newGif = new Pic({
            name: req.body.name,
            description: req.body.description,
            gifUrl: req.body.gifUrl
        });

        newGif.save().then(gifs => res.json(gifs));
    }
);

router.delete("/:id", (req, res) => {
    console.log(req.body);
    Gif.findById(req.params.id)
        .then(gif => gif.remove().then(res.json({ success: "true" })))
        .catch(err => res.status(404).json({ gifnotfound: "No gif found" }));
    res.send;
});
module.exports = router;
