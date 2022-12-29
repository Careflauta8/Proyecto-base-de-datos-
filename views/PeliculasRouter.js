
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

const PeliculasController = require('../controllers/PeliculasController');

//Endpoints

router.get("/", PeliculasController.getAllPeliculas);
router.post("/", PeliculasController.newPelicula);
router.put("/", PeliculasController.updatePelicula);
router.delete("/", PeliculasController.deletePelicula);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;