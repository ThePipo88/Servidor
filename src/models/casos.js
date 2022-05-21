const mongoose = require("mongoose");

const CasosSchema = mongoose.Schema({
    fecApertura_cas: Date,
    fecFinalizacion_cas: Date,
    nume_cas: Number,
    formato_cas: String,
    isAbierto_cas: Boolean,
    id_tramite: String
});

module.exports = mongoose.model("casos", CasosSchema);