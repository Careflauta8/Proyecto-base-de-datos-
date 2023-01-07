
const Serie = require('../models/serie');

const SeriesController = {};

//con el get miro todas las series//
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
//con el post veo peliculas (title,_id,rated...) que recibe datos por el body//
// si quisieramos por parametros utilizariamos el get//
SeriesController.postSeriesByRated = async (req, res) => {
    //Este rated es el rated que ha venido por body en el endpoint (url)
    const rated = req.body.rated;
    try {
        const ratedok = await Serie.find({rated: rated});

        if(rated <= 5){
            res.send({ "Msg": ratedok });
        } else {
            res.send({"Message":"No tenemos peliculas con esta Calificacion"})
        }
    } catch (error) {
        res.status(404);
        console.log(error);
    }
}
SeriesController.postSeriesById = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    let _id = req.body._id;
    try {
        const _idok = await Serie.find({_id: _id});
        res.send({ "Msg": _idok});
    
    } catch (error) {
        res.send({"Message": `No tenemos peliculas con este genero ${_idok._id}`})
    }

}
SeriesController.postSeriesByTitle = async (req, res) => {

    const title = req.body.title;
    try {
        const titleok = await Serie.find({title: title});
        res.send({ "Msg": titleok });
    
    } catch (error) {
        // res.send({"Message": `No tenemos peliculas con esta Nombre ${titleok.name}`})
    }
}
SeriesController.postSeriesByGenre = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    const genre = req.body.genre;
    try {
        const generook = await Serie.find({genre: genre});
        res.send({ "Msg": generook});
    
    } catch (error) {
        res.send({"Message": `No tenemos peliculas con este genero ${generook}`})
    }
}
SeriesController.postSeriesByNew_chapter_the_next_7_days = async (req, res) => {

    const new_chapter_the_next_7_days = req.body.new_chapter_the_next_7_days;
    try {
        const new_chapter_the_next_7_daysok = await Serie.find({new_chapter_the_next_7_days: new_chapter_the_next_7_days});
        res.send({ "Msg": new_chapter_the_next_7_daysok});
    
    } catch (error) {
        res.send({"Message": `No tenemos series con esta caracteristica`})
    }
}
SeriesController.postSeriesByMovie_or_theater_pass = async (req, res) => {

    const movie_or_theater_pass = req.body.movie_or_theater_pass;
    try {
        const movie_or_theater_passok = await Serie.find({movie_or_theater_pass: movie_or_theater_pass});
        res.send({ "Msg": movie_or_theater_passok});
    
    } catch (error) {
        res.send({"Message": `No tenemos series con esta caracteristica`})
    }
}

// es un post que sirve para agregar una nueva serie//
SeriesController.newSerie = async (req, res) => {

    let title = req.body.title;
    let genre = req.body.genre;
    let year = req.body.year;
    let director = req.body.director;
    let rated = req.body.rated; 
    let language = req.body.language;
    let new_chapter_the_next_7_days = req.body.new_chapter_the_next_7_days;
    let movie_or_theater_pass = req.body.movie_or_theater_pass;

    try {

        let result = await Serie.create({title: title, genre: genre, year: year, director: director, rated: rated, language: language, new_chapter_the_next_7_days: new_chapter_the_next_7_days, movie_or_theater_pass: movie_or_theater_pass})

        if(result?.title){
            res.send({"Message": `La serie ${result.title} se ha añadido con éxito`})
        }

    } catch (error) {
        console.log(error)
    }
        
};
//es un put que sirve para actualizar datos//
SeriesController.updateSerie = async (req, res) => {

    let id = req.body.id;
    let newTitle = req.body.title;
    let newLanguage = req.body.language;
    
    try {

        let result = await Serie.findByIdAndUpdate(id, {
            $set: {
                tilte: newTitle,
                language: newLanguage
            }
        }).setOptions({ returnDocument: 'after' })

        if(result?.title){
            res.send(result)
        }

    } catch (error) {
        console.log("Error al actualizar el titulo de la serie", error);
    }
}
//es un delete que sirve para eliminar en este caso series//
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