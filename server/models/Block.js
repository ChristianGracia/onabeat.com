const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlockSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    first: {
        name: {
            type: String
        },
        description: {
            type: String
        },
        url: { type: String },
        type: { type: String }
    },
    second: {
        name: {
            type: String
        },
        description: {
            type: String
        },
        url: { type: String }
        ,
        type: { type: String }
    },
    third: {
        name: {
            type: String
        },
        description: {
            type: String
        },
        url: { type: String }
        ,
        type: { type: String }
    },
    fourth: {
        name: {
            type: String
        },
        description: {
            type: String
        },
        url: { type: String },

        type: { type: String }
    }




});

module.exports = mongoose.model("block", BlockSchema);