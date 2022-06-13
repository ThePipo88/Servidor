const express = require("express");
const UsuariosController = require("../controller/usuarios");

const api = express.Router();

api.post("/registrar/usuario", UsuariosController.registrar);

api.get("/obtener/usuario/:id", UsuariosController.findById);

//Exportar el api

module.exports = api;