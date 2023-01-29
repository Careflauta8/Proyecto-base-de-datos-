
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
// const isAdmin = require('../middlewares/isAdmin');

const SeriesController = require('../controllers/SeriesController');

//Endpoints

router.get("/", SeriesController.getAllSeries);
router.post("/rated", SeriesController.postSeriesByRated);
router.post("/id", SeriesController.postSeriesById);
router.get("/title/:title", SeriesController.getSeriesByTitle);
router.post("/genre", SeriesController.postSeriesByGenre);
router.post("/new_chapter_the_next_7_days", SeriesController.postSeriesByNew_chapter_the_next_7_days);
router.post("/movie_or_theater_pass", SeriesController.postSeriesByMovie_or_theater_pass);


//Endpoints con middleware...

router.post("/rated",auth, SeriesController.postSeriesByRated);
router.post("/id",auth, SeriesController.postSeriesById);
router.get("/title/:title",auth, SeriesController.getSeriesByTitle); //lo tenia /title/:title
router.post("/genre",auth, SeriesController.postSeriesByGenre);
router.post("/new_chapter_the_next_7_days",auth, SeriesController.postSeriesByNew_chapter_the_next_7_days);
router.post("/movie_or_theater_pass",auth, SeriesController.postSeriesByMovie_or_theater_pass);
router.post("/",auth, SeriesController.newSerie);
router.put("/",auth, SeriesController.updateSerie);
router.delete("/",auth, SeriesController.deleteSerie);


// router.post("/",auth, isAdmin, SeriesController.newSerie);
// router.delete("/id",auth, isAdmin, SeriesController.deleteSerieById);
// router.put("/",auth, isAdmin, SeriesController.updateSerieById);


//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;