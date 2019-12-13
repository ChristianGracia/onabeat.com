const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  songUrl: {
    type: String
  }
});

module.exports = mongoose.model("song", SongSchema);
