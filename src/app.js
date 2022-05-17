//Configuracion basica

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config');

//Load routings ...
const organizacionRoutes = require('./routers/organizacion');
const empleadosRoutes = require('./routers/empleados');
const tramitesRoutes = require('./routers/tramites');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure Header HTTP
//...


//Router Basic
//Para cargar las rutas de organizacion
app.use(`/api/${API_VERSION}`, organizacionRoutes);
// app.use(`/api/${API_VERSION}`, empleadosRoutes);
// app.use(`/api/${API_VERSION}`, tramitesRoutes);

module.exports = app;