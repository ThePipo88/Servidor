const express = require("express");
const CasosController = require("../controller/casos");

const api = express.Router();

api.post("/registrar/casos", CasosController.registrar);
api.get("/obtener/caso/:id", CasosController.findById);
api.get("/obtener/caso", CasosController.findAll);
api.put("/actualizar/caso/:id", CasosController.updateCaso);
api.delete("/eliminar/caso/:id", CasosController.deleteCaso);

module.exports = api;