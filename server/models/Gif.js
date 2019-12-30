const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GifSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    gifUrl: {
        type: String
    }
});

module.exports = mongoose.model("gif", GifSchema);
