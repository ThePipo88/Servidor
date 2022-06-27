const mongoose = require("mongoose");

const DocumentosSchema = mongoose.Schema({
    nombre_doc: String,
    url_doc: String,
    estado_doc: Boolean,
    id_tramite: String,
    id_caso: String
});

module.exports = mongoose.model("documentos", DocumentosSchema);