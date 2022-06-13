const express = require("express");
const OrganizacionController = require("../controller/organizacion");

const api = express.Router();

api.post("/crearDepartamento", OrganizacionController.crearDepartamento);

//Exportar el api

module.exports = api;