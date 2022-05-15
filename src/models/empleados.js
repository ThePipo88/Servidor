const mongoose = require("mongoose");

const EmpleadosSchema = mongoose.Schema({
    nombre_emp: String,
    apellido1_emp: String,
    apellido2_emp: String,
    edad_emp: String,
    fecNacimiento_emp: Date
});

module.exports = mongoose.model("empleado", EmpleadosSchema);