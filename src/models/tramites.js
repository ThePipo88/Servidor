const mongoose = require("mongoose");

const TramitesSchema = mongoose.Schema({
    tipo_tra: String,
    departamento_id: Object,
    tipo_org: String,
    ciclo_tra:
    {
        nombre_cic:String,
        estado_cic:Boolean
    }
});

module.exports = mongoose.model("tramite", TramitesSchema);