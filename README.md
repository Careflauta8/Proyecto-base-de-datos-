
# BASE DE DATOS #

## PROYECTO ##
- Este proyecto se basa en realizar una base de datos que contenga usuarios,peliculas y series.Se ha utilizado JAVASCRIPT. Me he decantado por desarrollar una base de datos limpia y sencilla, facil de usar.
- En esta base de datos tanto los usuarios No registrados como los que ya tienen una cuenta en la app pueden buscar las peliculas por Titulo, Id, Genero y Calificacion. Las series las pueden encontrar por titulo, Id, Genero, Calificacion, si tiene un capitulo dentro de los proximos 7 dias y si se ha visto en cines o teatros, tambien una vez logueado puede modificar peliculas, series y datos personales.

## PROCESO ##
- Desarrollo principal de la idea.
- Creación de la base de datos con sus diferentes colecciones (usuarios,peliculas y series).
- Se lleva a cabo la organización de los usuarios.
- Se lleva a cabo la organización de las peliculas.
- Se lleva a cabo la organización de las series.
- últimas pinceladas para dejar finiquitado el trabajo, aun queda mucho por mejorar.

#### Endpoints coleccion Peliculas ####

###### Con los siguientes Endpoints el usuario NO necesita estar registrado ######
- router.get("/", PeliculasController.getAllPeliculas); Con este Endpoint el usuario podra ver el listado de todas las peliculas mas NO PODRA REPRODUCIRLAS.
http://localhost:5500/peliculas
- router.post("/rated",PeliculasController.postPeliculasByRated); Con este Endpoint el usuario podra buscar las peliculas por su clasificacion (NO PODRA REPRODUCIRLAS).
http://localhost:5500/peliculas/rated
- router.post("/id",PeliculasController.postPeliculasById); Con este Endpoint el usuario podra buscar las peliculas por su Id (NO PODRA REPRODUCIRLAS).
http://localhost:5500/peliculas/id
- router.post("/title",PeliculasController.postPeliculasByTitle); Con este Endpoint el usuario podra buscar las peliculas por su Titulo (NO PODRA REPRODUCIRLAS).
http://localhost:5500/peliculas/title
- router.post("/genre",PeliculasController.postPeliculasByGenre); Con este Endpoint el usuario podra buscar las peliculas por su Genero (NO PODRA REPRODUCIRLAS).
http://localhost:5500/peliculas/genre

###### Con los siguientes Endpoints el usuario SI necesita estar registrado y logueado ######
- router.post("/rated",auth, PeliculasController.postPeliculasByRated); Con este Endpoint el usuario podra buscar las peliculas por su clasificacion y podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/peliculas/rated
- router.post("/id",auth, PeliculasController.postPeliculasById); Con este Endpoint el usuario podra buscar las peliculas por su Id y podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/peliculas/id
- router.post("/title",auth, PeliculasController.postPeliculasByTitle); Con este Endpoint el usuario podra buscar las peliculas por su Titulo y podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/peliculas/title
- router.post("/genre",auth, PeliculasController.postPeliculasByGenre); Con este Endpoint el usuario podra buscar las peliculas por su Genero y podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/peliculas/genre
- router.delete("/",auth, PeliculasController.deletePelicula); Con este Endpoint el usuario podra eliminar alguna pelicula. Existen otros endpoints para agregar o modficicar datos de las peliculas, al ser una app familiar lo que se busca es la interactividad con todos los miembros.
http://localhost:5500/peliculas
- router.put("/",auth, PeliculasController.updatePelicula); Con este Endpoint el usuario podra modificar datos de alguna pelicula por ejemplo el idioma. Existen otros endpoints para agregar o eliminar  peliculas , al ser una app familiar lo que se busca es la interactividad con todos los miembros.
http://localhost:5500/peliculas
- router.post("/",auth, PeliculasController.newPelicula); Con este Endpoint el usuario podra agregar peliculas a la app. Existen otros endpoints para modificar datos o eliminar  peliculas , al ser una app familiar lo que se busca es la interactividad con todos los miembros.
http://localhost:5500/peliculas


#### Endpoints coleccion Series ####

###### Con los siguientes Endpoints el usuario NO necesita estar registrado ######
- router.get("/", SeriesController.getAllSeries); Con este Endpoint el usuario podra ver el listado de todas las series mas NO PODRA REPRODUCIRLAS.
http://localhost:5500/series
- router.post("/rated",SeriesController.postSeriesByRated); Con este Endpoint el usuario podra buscar las series por su clasificacion (NO PODRA REPRODUCIRLAS).
http://localhost:5500/series/rated
- router.post("/id",SeriesController.postSeriesById); Con este Endpoint el usuario podra buscar las series por su Id (NO PODRA REPRODUCIRLAS).
http://localhost:5500/series/id
- router.post("/title",SeriesController.postSeriesByTitle); Con este Endpoint el usuario podra buscar las series por su Titulo (NO PODRA REPRODUCIRLAS).
http://localhost:5500/series/title
- router.post("/genre",SeriesController.postSeriesByGenre); Con este Endpoint el usuario podra buscar las series por su Genero (NO PODRA REPRODUCIRLAS).
http://localhost:5500/series/genre
- router.post("/new_chapter_the_next_7_days", SeriesController.postSeriesByNew_chapter_the_next_7_days); Con este Endpoint el usuario podra buscar las series con la opcion que vayan a emitir un capitulo el los proximos 7 dias (NO PODRA REPRODUCIRLAS).
http://localhost:5500/series/new_chapter_the_next_7_days
- router.post("/movie_or_theater_pass", SeriesController.postSeriesByMovie_or_theater_pass); Con este Endpoint el usuario podra buscar las series con la opcion que tenga una salida en cine o teatro, no importa si lo hayan tenido o lo vayan a tener (NO PODRA REPRODUCIRLAS).
http://localhost:5500/series/movie_or_theater_pass

###### Con los siguientes Endpoints el usuario SI necesita estar registrado y logueado ######
- router.post("/rated",auth, SeriesController.postSeriesByRated); Con este Endpoint el usuario podra buscar las series por su clasificacion y podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/series/rated
- router.post("/id",auth, SeriesController.postSeriesById); Con este Endpoint el usuario podra buscar las series por su Id y podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/series/id
- router.post("/title",auth, SeriesController.postSeriesByTitle); Con este Endpoint el usuario podra buscar las series por su Titulo y podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/series/title
- router.post("/genre",auth, SeriesController.postSeriesByGenre); Con este Endpoint el usuario podra buscar las series por su Genero y podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/series/genre
- router.post("/new_chapter_the_next_7_days",auth, SeriesController.postSeriesByNew_chapter_the_next_7_days); Con este Endpoint el usuario podra buscar las series con la opcion de que vayan a tener o no un capitulo en los proximos 7 dias. El usuario podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/series/new_chapter_the_next_7_days
- router.post("/movie_or_theater_pass",auth, SeriesController.postSeriesByMovie_or_theater_pass); Con este Endpoint el usuario podra buscar las series con la opcion de que vayan a tener o no un paso por cines o teatros. El usuario podra reproducirlas en tv, ordenador, tablet o dispositivo movil.
http://localhost:5500/series/movie_or_theater_pass
- router.delete("/",auth, SeriesController.deleteSerie); Con este Endpoint el usuario podra eliminar alguna serie. Existen otros endpoints para agregar o modficicar datos de las series, al ser una app familiar lo que se busca es la interactividad con todos los miembros.
http://localhost:5500/series
- router.put("/",auth, SeriesController.updateSerie); Con este Endpoint el usuario podra modificar datos de alguna serie por ejemplo el idioma. Existen otros endpoints para agregar o eliminar  series , al ser una app familiar lo que se busca es la interactividad con todos los miembros.
http://localhost:5500/series
- router.post("/",auth, SeriesController.newSerie); Con este Endpoint el usuario podra agregar series a la app. Existen otros endpoints para modificar datos o eliminar  series , al ser una app familiar lo que se busca es la interactividad con todos los miembros.
http://localhost:5500/series


## OBJETIVO ##
- Se pretende mejorar la base de datos a medida que vamos avanzando en el curso, con un objetivo final de ser utilizado por usuarios reales.

## AUTOR ##
- Diego Sánchez Londoño 