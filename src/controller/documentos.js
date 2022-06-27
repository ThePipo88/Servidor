const bcrypt = require("bcrypt-nodejs");
const Documento = require("../models/documentos");


async function crearDocumento(req, res) {

    const documento = new Documento(req.body);

    await documento.save((err, userStored) => {
        if (err) {
            res.status(500).send({ message: "El documento ya existe" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error creandon el documento" });
            } else {
                res.status(200).send({ user: userStored });
            }
        }
    })
}


async function findByNumCaso(req, res) {

    await Documento.find({ id_caso: req.params.id }, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: "Los archios consultados no existe" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error cargando los archivos" });
            } else {

                if (userStored.length > 0) {

                    res.status(200).send({ user: userStored });

                } else {
                    res.status(500).send({ message: "Los archivos consultados no existe" });
                }

            }
        }
    }).clone().catch(function (err) { console.log(err) })
}


module.exports = {
    crearDocumento,
    findByNumCaso
};