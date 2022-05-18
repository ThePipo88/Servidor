const mongoose = require("mongoose");

const EmpleadosSchema = mongoose.Schema({
    nombre_emp: String,
    cedula_emp: {
        type: String,
        unique: true
    },
    apellido1_emp: String,
    apellido2_emp: String,
    edad_emp: Number,
    fecNacimiento_emp: Date
});

module.exports = mongoose.model("empleado", EmpleadosSchema);