const bcrypt = require("bcrypt-nodejs");
const Usuarios = require("../models/usuarios");

function registrar(req, res) {
    const usuario = new Usuarios(req.body);

    bcrypt.hash(usuario.contrasena, null, null, function (err, hash) {
        if (err) {
            res.status(500).send({ message: "Error enciptando la contrasena." });
        } else {
            usuario.contrasena = hash;

            //Guardar usuario en base de datos
            usuario.save((err, userStored) => {
                if (err) {
                    res.status(500).send({ message: "El usuario ya existe" });
                } else {
                    if (!userStored) {
                        res.status(404).send({ message: "Error creandon el usuario" });
                    } else {
                        res.status(200).send({ user: userStored });
                    }
                }
            })
        }
    })
}

async function findById(req, res) {

    const usuario = await Usuarios.findById(req.params.id, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: "El usuario consultado no existe" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error cargando los usuarios" });
            } else {
                res.status(200).send({ user: userStored });
            }
        }
    }).clone().catch(function (err) { console.log(err) })
}

module.exports = {
    registrar,
    findById
};