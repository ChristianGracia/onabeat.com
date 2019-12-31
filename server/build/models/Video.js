"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var VideoSchema = new Schema({
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