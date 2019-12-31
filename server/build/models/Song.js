"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SongSchema = new Schema({
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