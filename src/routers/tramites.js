const express = require("express");
const TramitesController = require("../controller/tramites");

const api = express.Router();

api.post("/add", TramitesController.add);

//Exportar el api

module.exports = api;