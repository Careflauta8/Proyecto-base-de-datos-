
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
// const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');

const SeriesController = require('../controllers/SeriesController');

//Endpoints

router.get("/", SeriesController.getAllSeries);
router.post("/", SeriesController.newSerie);
router.put("/", SeriesController.updateSerie);
router.delete("/", SeriesController.deleteSerie);

//Endpoints de busqueda//

router.post("/rated", SeriesController.postSeriesByRated);
router.post("/id", SeriesController.postSeriesById);
router.post("/title", SeriesController.postSeriesByTitle);
router.post("/genre", SeriesController.postSeriesByGenre);
router.post("/new_chapter_the_next_7_days", SeriesController.postSeriesByNew_chapter_the_next_7_days);
router.post("/movie_or_theater_pass", SeriesController.postSeriesByMovie_or_theater_pass);

//Endpoints con middleware...



//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;