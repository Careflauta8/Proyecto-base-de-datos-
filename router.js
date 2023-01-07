

//Importo método router() de la clase express
const router = require ('express').Router();

const PeliculasRouter = require('./views/PeliculasRouter');
const SeriesRouter = require('./views/SeriesRouter');
const UsersRouter = require('./views/UsersRouter');

router.use("/peliculas", PeliculasRouter);
router.use("/series", SeriesRouter);
router.use("/users", UsersRouter);


//Exporto router
module.exports = router;