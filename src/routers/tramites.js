const express = require("express");
const TramitesController = require("../controller/tramites");

const api = express.Router();

api.post("/tramites/registrar/tramites", TramitesController.registrar);

//Exportar el api

module.exports = api;