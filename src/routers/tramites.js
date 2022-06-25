const express = require("express");
const TramitesController = require("../controller/tramites");

const api = express.Router();

api.post("/tramites/registrartramites", TramitesController.registrar);
api.get("/tramites/getAll", TramitesController.findAll);
api.get("/tramites/getByIdDep/:id", TramitesController.getByIdDep);

//Exportar el api

module.exports = api;