

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peliculaSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    year: {
        type: string,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: string,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});

const Pelicula = mongoose.model("Pelicula", peliculaSchema);
module.exports = Pelicula;