

//Importo clase express
const express=require('express');
//Importo métodos de express
const app=express();

const dbconnect = require("./db/dbconnect");

const PORT = 5500;

//Importo fichero ./router
const router = require('./router');

//Middlewares
//Para poder usar json
app.use(express.json());

app.use(router);

//Me conecto a la base de datos
dbconnect();