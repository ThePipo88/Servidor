const express = require("express");
const EmpleadosController = require("../controller/empleados");

const api = express.Router();

api.post("/registrar/usuarios", EmpleadosController.registrar);
api.get("/obtener/:id", EmpleadosController.findById);
api.get("/obtener/", EmpleadosController.findAll);
api.put("/actualizar/:id", EmpleadosController.updateEmpleado);
api.delete("/eliminar/:id", EmpleadosController.deleteEmpleado);

module.exports = api;