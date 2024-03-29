const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("video", VideoSchema);
