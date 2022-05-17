const bcrypt = require("bcrypt-nodejs");
const Empleados = require("../models/empleados");

function add (req, res)
{
    const empleados = new Empleados(req.body);

    empleados.save((err, userStored) => {
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

module.exports = {
    add
};