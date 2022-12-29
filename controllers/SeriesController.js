
const Serie = require('../models/serie');

const SeriesController = {};

SeriesController.getAllSeries = async (req, res) => {

    try {
        let Series = await Serie.find({});

        if(Series.length > 0){
            res.send(series)
        } else {
            res.send({"Message":"Lo sentimos, no hemos encontrado ninguna Serie."})
        }

    } catch (error) {
        console.log(error);
    }
}

SeriesController.newSerie = async (req, res) => {

    let name = req.body.name;
    let year = req.body.year;
    let director = req.body.director;
    let duration = req.body.duration; 
    let language = req.body.language;    

    try {

        let result = await Serie.create({name: name, year: year, director: director, duration: duration, language: language})

        if(result?.name){
            res.send({"Message": `La serie ${result.name} se ha añadido con éxito`})
        }

    } catch (error) {
        console.log(error)
    }
        
};

SeriesController.updateSerie = async (req, res) => {

    let id = req.body.id;
    let newName = req.body.name;
    let newLanguage = req.body.language;
    
    try {

        let result = await Serie.findByIdAndUpdate(id, {
            $set: {
                name: newName,
                language: newLanguage
            }
        }).setOptions({ returnDocument: 'after' })

        if(result?.name){
            res.send(result)
        }

    } catch (error) {
        console.log("Error al actualizar el nombre de la serie", error);
    }
}

SeriesController.deleteSerie = async (req, res) => {
    let id = req.body.id;

    try {
        
        let result = await Car.findByIdAndDelete(id);

        res.send({"Message": `La serie ${result.name} se ha eliminado con éxito`})
        
    } catch (error) {
        console.log("Error al eliminar la serie", error);
       
    }
};

//Exporto SeriesController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = SeriesController;