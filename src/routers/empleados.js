const express = require("express");
const EmpleadosController = require("../controller/empleados");

const api = express.Router();

api.post("/registrar/usuarios", EmpleadosController.registrar);

//Exportar el api

module.exports = api;