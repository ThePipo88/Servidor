const bcrypt = require("bcrypt-nodejs");
const Organizacion = require("../models/organizacion");


function signUp(req, res) {
    const organizacion = new Organizacion();

    const { nombre_org, descripcion_org, tipo_org, correo_org, clave_org } = req.body;

    organizacion.nombre_org = nombre_org;
    organizacion.descripcion_org = descripcion_org;
    organizacion.tipo_org = tipo_org;
    organizacion.correo_org = correo_org;
    organizacion.clave_org = clave_org;

    bcrypt.hash(clave_org, null, null, function (err, hash) {
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