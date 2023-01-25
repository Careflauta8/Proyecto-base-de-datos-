
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alquilerSchema = new Schema ({
    user_Id: {
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    serie_Id: {
        type: Schema.Types.ObjectId, ref: 'serie',
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
    }

});

const Alquiler = mongoose.model("Alquiler", alquilerSchema);
module.exports = Alquiler;