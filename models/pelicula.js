

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peliculaSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
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
        required: false
    }
});

const Pelicula = mongoose.model("Pelicula", peliculaSchema);
module.exports = Pelicula;