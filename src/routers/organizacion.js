const express = require("express");
const OrganizacionController = require("../controller/organizacion");

const api = express.Router();

api.post("/sign-up", OrganizacionController.signUp);

//Exportar el api

module.exports = api;