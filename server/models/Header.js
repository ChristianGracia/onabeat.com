const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeaderSchema = new Schema({
  headerString: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("header", HeaderSchema);
