
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

#### Endpoints coleccion peliculas ####

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



## OBJETIVO ##
- Se pretende mejorar la base de datos a medida que vamos avanzando en el curso, con un objetivo final de ser utilizado por usuarios reales.

## AUTOR ##
- Diego Sánchez Londoño 