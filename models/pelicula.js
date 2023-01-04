

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const peliculaSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    genre: {
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