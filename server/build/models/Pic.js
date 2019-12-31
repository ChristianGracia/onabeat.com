"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PicSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    picUrl: {
        type: String
    }
});

module.exports = mongoose.model("pic", PicSchema);