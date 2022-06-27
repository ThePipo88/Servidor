const express = require("express");
const DocumentosController = require("../controller/documentos");

const api = express.Router();

api.post("/documentos/registrar/documento", DocumentosController.crearDocumento);
api.get("/documentos/finByNumCaso/:id", DocumentosController.findByNumCaso);

module.exports = api;