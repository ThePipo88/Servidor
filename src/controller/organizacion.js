const bcrypt = require("bcrypt-nodejs");
const Organizacion = require("../models/organizacion");


function signUp(req, res) {

    const organizacion = new Organizacion(req.body);

    bcrypt.hash(organizacion.clave_org, null, null, function (err, hash) {
        if (err) {
            res.status(500).send({ message: "Error enciptando la contrasena." });
        } else {
            organizacion.clave_org = hash;

            //Guardar usuario en base de datos
            organizacion.save((err, userStored) => {
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

module.exports = {
    signUp
};