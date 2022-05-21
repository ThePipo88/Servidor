//Configuracion basica

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config');

//Load routings ...
const organizacionRoutes = require('./routers/organizacion');
const empleadosRoutes = require('./routers/empleados');
const tramitesRoutes = require('./routers/tramites');
const departamentosRoutes = require('./routers/departamentos');
const casosRoutes = require('./routers/casos');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure Header HTTP
//...


//Router Basic
//Para cargar las rutas de organizacion
app.use(`/api/${API_VERSION}`, organizacionRoutes);
//Para cargar las rutas de empleados
app.use(`/api/${API_VERSION}`, empleadosRoutes);
//Para cargar las rutas de tramites
app.use(`/api/${API_VERSION}`, tramitesRoutes);
//Para cargar las rutas de casos
app.use(`/api/${API_VERSION}`, casosRoutes);
//Para cargar las rutas de departamentos
app.use(`/api/${API_VERSION}`, departamentosRoutes);

module.exports = app;