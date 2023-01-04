

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serieSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});

const Serie = mongoose.model("Serie", serieSchema);
module.exports = Serie;