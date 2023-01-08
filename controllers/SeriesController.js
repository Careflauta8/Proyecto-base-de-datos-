
const Serie = require('../models/serie');

const SeriesController = {};

//con el get miro todas las series//
SeriesController.getAllSeries = async (req, res) => {
    try {
        let series = await Serie.find({});

        if(series.length > 0){
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
         if(rated <= 5){
            const ratedok = await Serie.find({rated: rated});
            res.send({ "Msg": ratedok });
        } else {
            res.send({"message": `La Calificacion va de 0 a 5, siendo 5 la mayor puntuacion. No hay peliculas con esta Calificacion ${rated}`})
        }
    } catch (error) {
        res.send({"Message": `No tenemos peliculas con esta Calificacion ${rated}`})
    }
}
SeriesController.postSeriesById = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    let _id = req.body._id;
    try {
        const _idok = await Serie.find({_id: _id});
        res.send({ "Msg": _idok});
    
    } catch (error) {
        res.send({"Message": `No tenemos peliculas con este id ${_id}, compruebe que el Id este bien escrito`})
    }

}
SeriesController.postSeriesByTitle = async (req, res) => {
    const title = req.body.title;
    try {
        const foundSeries = await Serie.find({
            title: title
        })
        if(foundSeries.length === 0){
            res.send({"message": `La serie ${title} no se ha encontrado, compruebe qu este bien escrito el nombre`});
        }else{
            res.send(foundSeries)
        }
    } catch (error) {
        console.log(error)
    }

    // const title = req.body.title;
    // try {
    //     const titleok = await Serie.find({title: title});
    //     res.send({ "Msg": titleok });
    
    // } catch (error) {
    //     // res.send({"Message": `No tenemos peliculas con esta Nombre ${titleok.name}`})
    // }
}
SeriesController.postSeriesByGenre = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    const genre = req.body.genre;
    try {
        const foundSeries = await Serie.find({
            genre: genre
        })
        if(foundSeries.length === 0){
            res.send({"message": `El Genero ${genre} no se ha encontrado, escriba un Genero de serie correcto`});
        }else{
            res.send(foundSeries)
        }
    } catch (error) {
        console.log(error)
    }
}
SeriesController.postSeriesByNew_chapter_the_next_7_days = async (req, res) => {
    const new_chapter_the_next_7_days = req.body.new_chapter_the_next_7_days;
    try {
        const foundSeries = await Serie.find({
            new_chapter_the_next_7_days: new_chapter_the_next_7_days
        })
        if(foundSeries.length === 0){
            res.send({"message": `La palabra ${new_chapter_the_next_7_days} no esta escrita correctamente, escriba Si o No `});
        }else{
            res.send(foundSeries)
        }
    } catch (error) {
        console.log(error)
    }
}
SeriesController.postSeriesByMovie_or_theater_pass = async (req, res) => {
    const movie_or_theater_pass = req.body.movie_or_theater_pass;
    try {
        const foundSeries = await Serie.find({
            movie_or_theater_pass: movie_or_theater_pass
        })
        if(foundSeries.length === 0){
            res.send({"message": `La palabra ${movie_or_theater_pass} no esta escrita correctamente, escriba Si o No `});
        }else{
            res.send(foundSeries)
        }
    } catch (error) {
        console.log(error)
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

    let _id = req.body._id;
    let newTitle = req.body.title;
    let newLanguage = req.body.language;
    
    try {

        let result = await Serie.findByIdAndUpdate(_id, {
            $set: {
                tilte: newTitle,
                language: newLanguage
            }
        }).setOptions({ returnDocument: 'after' })

        if(result?.title){
            res.send({"Message": `La serie ${result.title} se ha actualizado con éxito`})
        }

    } catch (error) {
        res.send("Error al actualizar datos de la serie", error);
    }
}
//es un delete que sirve para eliminar en este caso series//
SeriesController.deleteSerie = async (req, res) => {
    let id = req.body.id;

    try {
        
        let result = await Car.findByIdAndDelete(id);

        res.send({"Message": `La serie ${result.title} se ha eliminado con éxito`})
        
    } catch (error) {
        res.send("Error al eliminar la serie", error);
       
    }
};
// SeriesController.deleteSerieById = async (req, res) => {
//     let _id = req.body._id;
//     let userAdmin = req.user.usuario[0];

//     try {
//         if(result?._id === userAdmin){
//             let result = await Serie.findByIdAndDelete(_id);
//             res.send({"Message": `La Serie ${result.title} se ha eliminado con éxito`})
//         }else{
//             res.send({"Message": `No esta autorizado para eliminar series`});
//         }
//     } catch (error) {
//         console.log("Error al eliminar la serie", error);
       
//     }
// };
// SeriesController.putSerieById = async (req, res) => {
//     let _id = req.body._id;
//     let userAdmin = req.user.usuario[0];

//     try {
//         if(req.body._id === userAdmin){
//             let result = await Serie.findByIdAndDelete(_id);
//             res.send({"Message": `La Serie ${result.title} se ha actualizado con éxito`})
//         }else{
//             res.send({"Message": `No esta autorizado para actualizar series`});
//         }
//     } catch (error) {
//         console.log("Error al actualizar la serie", error);
       
//     }
// };

//Exporto SeriesController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = SeriesController;