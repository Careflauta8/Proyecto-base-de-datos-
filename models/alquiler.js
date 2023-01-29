
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alquilerSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    serieId: {
        type: Schema.Types.ObjectId, ref: 'Serie',
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFin: {
        type: Date,
        required: true
    },
    importe: { 
        type: Number,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    nameSerie: {
        type: String,
        required: true
    }

});

const Alquiler = mongoose.model("Alquiler", alquilerSchema);
module.exports = Alquiler;