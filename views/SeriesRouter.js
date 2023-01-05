
//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//ejecuto el método Router() de express (siempre igual)
const router = express.Router();

//Importo el middleware de auth...
const auth = require('../middlewares/auth');
const isAdmin = require('../middlewares/isAdmin');

const SeriesController = require('../controllers/SeriesController');

//Endpoints

router.get("/", SeriesController.getAllSeries);
router.post("/", SeriesController.newSerie);
router.put("/", SeriesController.updateSerie);
router.delete("/", SeriesController.deleteSerie);


//Endpoints con middleware...


// router.get("/profile/:_id", auth, SeriesController.getSerieById);
// router.post("/name",auth, SeriesController.getSeriesByName);



//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;