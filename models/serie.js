

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serieSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
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
    rated: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    new_chapter_the_next_7_days: {
        type: String,
        required: true
    },
    movie_or_theater_pass: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    }
});

const Serie = mongoose.model("Serie", serieSchema);
module.exports = Serie;