const express = require("express");
const OrganizacionController = require("../controller/organizacion");

const api = express.Router();

api.post("/crearOrganizacion", OrganizacionController.crearOrganizacion);

//Exportar el api

module.exports = api;