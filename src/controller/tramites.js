const bcrypt = require("bcrypt-nodejs");
const Tramites = require("../models/tramites");

function registrar(req, res) {
    const tramites = new Tramites(req.body);

    tramites.save((err, userStored) => {
        if (err) {
            res.status(500).send({ message: "El tramite ya existe" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error creando el tramite" });
            } else {
                res.status(200).send({ user: userStored });
            }
        }
    })
}

async function findAll(req, res) {

    const tramites = await Tramites.find((err, userStored) => {
        if (err) {
            res.status(500).send({ message: "No existen tramites registrados" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error cargando los tramites" });
            } else {
                res.status(200).send({ user: userStored });
            }
        }
    }).clone().catch(function (err) { console.log(err) })
}


async function getByIdDep(req, res) {

    await Tramites.find({ departamento_id: req.params.id }, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: "No existen departamentos registrados" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error cargando los departamentos" });
            } else {
                res.status(200).send({ user: userStored });
            }
        }
    }).clone().catch(function (err) { console.log(err) })
}

module.exports = {
    registrar,
    findAll,
    getByIdDep
};