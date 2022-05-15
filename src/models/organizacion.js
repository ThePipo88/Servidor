const mongoose = require("mongoose");

const OrganizacionSchema = mongoose.Schema({
    nombre_org: String,
    descripcion_org: String,
    tipo_org: String,
    correo_org: {
        type: String,
        unique: true
    },
    clave_org: String
});

module.exports = mongoose.model("organizacione", OrganizacionSchema);