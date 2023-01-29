const Serie = require('../models/serie');
const Alquiler = require('../models/alquiler');

// const jsonwebtoken = require('jsonwebtoken');

// const authConfig = require('../config/auth');

const AlquileresController = {};


AlquileresController.getAllAlquileres = async (req, res) => {

    try {

        let result = await Alquiler.find({})
             .populate('userId')
             .populate('serieId');

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Lo sentimos, no hemos encontrado ningún alquiler." })
        }

    } catch (error) {
        console.log(error);
    }
}


AlquileresController.newAlquiler = async (req, res) => {

    try {

        let user = await Alquiler.create({
            userId: req.body.idUser,
            serieId: req.body.idSerie,
            fechaInicio: new Date (req.body.fechaInicio),
            fechaFin: new Date (req.body.fechaFin),
            importe: req.body.importe,
            customer: req.body.customer
        })

        if (user) {

            res.send({ "Message": `Ha alquilado la serie con éxito` });

        }else {

            res.send({ "Message": `Ha habido un error en el alquiler de la serie` });

        }

    } catch (error) {
        console.log(error)
    }

};


//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = AlquileresController;