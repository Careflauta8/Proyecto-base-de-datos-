
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const peliculaSchema = new Schema ({
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
    }
});

const Pelicula = mongoose.model("Pelicula", peliculaSchema);
module.exports = Pelicula;