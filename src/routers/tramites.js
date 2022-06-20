const express = require("express");
const TramitesController = require("../controller/tramites");

const api = express.Router();

api.post("/tramites/registrartramites", TramitesController.registrar);
api.get("/tramites/getAll", TramitesController.findAll);

//Exportar el api

module.exports = api;