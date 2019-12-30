const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
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
        videoUrl: { type: String }
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