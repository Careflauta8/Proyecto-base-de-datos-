
const Pelicula = require('../models/pelicula');

const PeliculasController = {};

//con el get miro todas las peliculas//
PeliculasController.getAllPeliculas = async (req, res) => {

    try {
        let peliculas = await pelicula.find({});

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

PeliculasController.getPeliculaById = async (req, res) => {

    //Este id es el id que ha venido por parámetro en el endpoint (url)
    let _id = req.params._id;
    let pelicula = req.pelicula.usuario[0];

    //Estos datos de user son lo que el middleware auth ha decodificado del token ;)
    if (_id !== user._id) {

        res.send({ "Msg": "Acceso no autorizado" });
    } else {

        res.send({

            "id": pelicula._id,
            "name": pelicula.name,
            "year": pelicula.year,
            "director": pelicula.director,
            "duration": pelicula.duration,
            "language": pelicula.language,

        });
    }
}

// es un post que sirve para agregar una pelicula//
PeliculasController.newPelicula = async (req, res) => {

    let name = req.body.name;
    let year = req.body.year;
    let director = req.body.director;
    let duration = req.body.duration; 
    let language = req.body.language;  

    try {

        let result = await Pelicula.create({name: name, year: year, director: director, duration: duration, language: language})

        if(result?.name){
            res.send({"Message": `La pelicula ${result.name} se ha añadido con éxito`})
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
    let id = req.body.id;

    try {
        
        let result = await Pelicula.findByIdAndDelete(id);

        res.send({"Message": `La pelicula ${result.name} se ha eliminado con éxito`})
        
    } catch (error) {
        console.log("Error al eliminar la película", error);
       
    }
};

//Exporto CarsController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = PeliculasController;