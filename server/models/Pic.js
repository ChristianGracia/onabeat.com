const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PicSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    picUrl: {
        type: String
    }
});

module.exports = mongoose.model("pic", PicSchema);
