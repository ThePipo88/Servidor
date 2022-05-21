const mongoose = require("mongoose");

const DepartamentosSchema = mongoose.Schema({
    nombre_dep: String,
    jefe_dep: String,
    dir_dep: String,
    tel_dep: Number,
    correo_dep: String
});

module.exports = mongoose.model("departamentos", DepartamentosSchema);