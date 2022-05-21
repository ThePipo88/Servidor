const express = require("express");
const CasosController = require("../controller/casos");

const api = express.Router();

api.post("/registrar/usuarios", CasosController.registrar);
api.get("/obtener/:id", CasosController.findById);
api.get("/obtener/", CasosController.findAll);
api.put("/actualizar/:id", CasosController.updateCaso);
api.delete("/eliminar/:id", CasosController.deleteCaso);

module.exports = api;