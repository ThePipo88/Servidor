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


async function findByNameAndPassword(req, res) {

    const usuario = await Usuarios.find({ nombre_usuario: req.params.nombre }, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: "El usuario consultado no existe" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error cargando los usuarios" });
            } else {

                if (userStored.length > 0) {

                    bcrypt.compare(req.params.contrasena, userStored[0].contrasena, (err, resc) => {
                        if (resc) {
                            res.status(200).send({ user: userStored });
                        } else {
                            res.status(500).send({ message: "Usuario o contrasena erroneos" });
                        }
                    })

                } else {
                    res.status(500).send({ message: "El usuario consultado no existe" });
                }

            }
        }
    }).clone().catch(function (err) { console.log(err) })
}

module.exports = {
    registrar,
    findById,
    findByNameAndPassword
};