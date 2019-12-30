const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    vid: {
        type: String,
    },
    song: {
        type: String,
    },
    gif: {
        type: String,
    },
    pic: {
        type: String,
    }
});

module.exports = mongoose.model("block", BlockSchema);