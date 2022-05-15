//Configuracion basica

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config');

//Load routings ...
const organizacionRoutes = require('./routers/organizacion');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure Header HTTP
//...


//Router Basic
//Para cargar las rutas de organizacion
app.use(`/api/${API_VERSION}`, organizacionRoutes);

module.exports = app;