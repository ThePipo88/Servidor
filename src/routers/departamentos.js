const express = require("express");
const DepartamentosController = require("../controller/departamentos");

const api = express.Router();

api.post("/registrar/usuarios", DepartamentosController.registrar);
api.get("/obtener/:id", DepartamentosController.findById);
api.get("/obtener/", DepartamentosController.findAll);
api.put("/actualizar/:id", DepartamentosController.updateDepartamento);
api.delete("/eliminar/:id", DepartamentosController.deleteDepartamento);

module.exports = api;