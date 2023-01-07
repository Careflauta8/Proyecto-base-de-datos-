
const Pelicula = require('../models/pelicula');

const PeliculasController = {};

//con el get miro todas las peliculas//
PeliculasController.getAllPeliculas = async (req, res) => {

    try {
        let peliculas = await Pelicula.find({});

        if(peliculas.length > 0){
            res.send(peliculas)
        } else {
            res.send({"Message":"Lo sentimos, no hemos encontrado ninguna pelicula."})
        }
    }
    catch(error) {
        console.log(error);
    }
}
//con el post veo peliculas (title,_id,rated...) que recibe datos por el body//
// si quisieramos por parametros utilizariamos el get//
PeliculasController.postPeliculasByRated = async (req, res) => {
    //Este rated es el rated que ha venido por parámetro en el endpoint (url)
    const rated = req.body.rated;
    try {
        if(rated <= 5){
            const ratedok = await Pelicula.find({rated: rated});
            res.send({ "Msg": ratedok });
        }else{
            res.send({"message": `La Calificacion va de 0 a 5, siendo 5 la mayor puntuacion. No hay peliculas con esta Calificacion ${rated}`})
        }
    } catch (error) {
        res.send({"Message": `No tenemos peliculas con esta Calificacion ${rated}`})
    }

//     //Estos datos de user son lo que el middleware auth ha decodificado del token ;)
//    if (_id !== user._id) {

//        res.send({ "Msg": "Acceso no autorizado" });
//     } else {

//        res.send({

//             "id": pelicula._id,
//             "name": pelicula.name,
//             "genre": pelicula.genre,
//             "year": pelicula.year,
//             "director": pelicula.director,
//             "rated": pelicula.rated,
//             "language": pelicula.language,

//         });
//     }
}
PeliculasController.postPeliculasById = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    let _id = req.body._id;
    try {
        const _idok = await Pelicula.find({_id: _id});
        res.send({ "Msg": _idok});
    
    } catch (error) {
        res.send({"Message": `No tenemos peliculas con este id ${_id}, Introduzca un id correcto`})
    }

}
PeliculasController.postPeliculasByTitle = async (req, res) => {

    const title = req.body.title;
    try {
         if(title == 'title'){
            const titleok = await Pelicula.find({title: title});
            res.send({ "Msg": titleok });
            console.log("aaaaa");
         }
          else{
             res.send({"message":`No tenemos peliculas con este Nombre ${title}, Compruebe que esta bien escrito`})
         }
    } catch (error) {
        res.send({"Message": `No tenemos peliculas con este Nombre ${title}`})
    }
}
PeliculasController.postPeliculasByGenre = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    const genre = req.body.genre;
    try {
        const generook = await Pelicula.find({genre: genre});
        res.send({ "Msg": generook});
    
    } catch (error) {
        res.send({"Message": `No tenemos peliculas con este genero ${generook.genre}`})
    }
}
// es un post que sirve para agregar una nueva pelicula//
PeliculasController.newPelicula = async (req, res) => {

    let title = req.body.title;
    let genre = req.body.genre;
    let year = req.body.year;
    let director = req.body.director;
    let rated = req.body.rated; 
    let language = req.body.language;  

    try {

        let result = await Pelicula.create({title: title, genre: genre, year: year, director: director, rated: rated, language: language})

        if(result?.title){
            res.send({"Message": `La pelicula ${result.title} se ha añadido con éxito`})
        }

    } catch (error) {
        console.log(error)
    }
        
};

//es un put que sirve para actualizar datos//
PeliculasController.updatePelicula = async (req, res) => {

    let id = req.body.id;
    let newName = req.body.name;
    let newLanguage = req.body.language;
    
    try {

        let result = await Pelicula.findByIdAndUpdate(id, {
            $set: {
                name: newName,
                language: newLanguage
            }
        }).setOptions({ returnDocument: 'after' })

        if(result?.name){
            res.send(result)
        }

    } catch (error) {
        console.log("Error al actualizar el nombre de la película", error);
    }
}

//es un delete que sirve para eliminar en este caso peliculas//
PeliculasController.deletePelicula = async (req, res) => {
    let _id = req.body._id;
    let userAdmin = req.user.usuario[0];

    try {
        
        let result = await Pelicula.findByIdAndDelete(_id);

        res.send({"Message": `La pelicula ${result.name} se ha eliminado con éxito`})
        
    } catch (error) {
        console.log("Error al eliminar la película", error);
       
    }
};
// PeliculasController.deletePeliculaById = async (req, res) => {
//     let _id = req.body._id;
//     let userAdmin = req.user.usuario[0];

//     try {
//         if(req.body._id === userAdmin){
//             let result = await Pelicula.findByIdAndDelete(_id);
//             res.send({"Message": `La pelicula ${result.title} se ha eliminado con éxito`})
//         }else{
//             res.send({"Message": `No esta autorizado para eliminar peliculas`});
//         }
//     } catch (error) {
//         console.log("Error al eliminar la película", error);
       
//     }
// };
// PeliculasController.putPeliculaById = async (req, res) => {
//     let _id = req.body._id;
//     let userAdmin = req.user.usuario[0];

//     try {
//         if(req.body._id === userAdmin){
//             let result = await Pelicula.findByIdAndDelete(_id);
//             res.send({"Message": `La pelicula ${result.title} se ha actualizado con éxito`})
//         }else{
//             res.send({"Message": `No esta autorizado para actualizar peliculas`});
//         }
//     } catch (error) {
//         console.log("Error al actualizar la película", error);
       
//     }
// };

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = PeliculasController;