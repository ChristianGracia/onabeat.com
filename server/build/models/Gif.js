"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GifSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    gifUrl: {
        type: String
    }
});

module.exports = mongoose.model("gif", GifSchema);