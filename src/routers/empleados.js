const express = require("express");
const EmpleadosController = require("../controller/empleados");

const api = express.Router();

api.post("/add", EmpleadosController.add);

//Exportar el api

module.exports = api;