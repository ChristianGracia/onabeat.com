"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BlockSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    vid: {
        videoName: {
            type: String
        },
        videoDescription: {
            type: String
        },
        vidUrl: { type: String }
    },
    song: {
        songName: {
            type: String
        },
        songArtist: {
            type: String
        },
        songUrl: { type: String }
    },
    pic: {
        picName: {
            type: String
        },
        picDescription: {
            type: String
        },
        picUrl: { type: String }
    },
    gif: {
        gifName: {
            type: String
        },
        gifDescription: {
            type: String
        },
        gifUrl: { type: String }
    }

});

module.exports = mongoose.model("block", BlockSchema);