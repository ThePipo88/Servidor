const bcrypt = require("bcrypt-nodejs");
const Empleados = require("../models/empleados");


async function registrar(req, res) {
    const empleados = new Empleados(req.body);

    await empleados.save((err, userStored) => {
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


async function findById(req, res) {

    const empleado = await Empleados.findById(req.params.id, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: "El empleado consultado no existe" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error cargando los empleados" });
            } else {
                res.status(200).send({ user: userStored });
            }
        }
    }).clone().catch(function (err) { console.log(err) })
}


async function findAll(req, res) {

    const empleado = await Empleados.find((err, userStored) => {
        if (err) {
            res.status(500).send({ message: "No existen empleados registrados" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error cargando los empleados" });
            } else {
                res.status(200).send({ user: userStored });
            }
        }
    }).clone().catch(function (err) { console.log(err) })
}


async function updateEmpleado(req, res) {

    const empleado = await Empleados.findByIdAndUpdate(req.params.id, req.body, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: "El empleado a actualizar no existe" });
        } else {
            if (!userStored) {
                res.status(404).send({ message: "Error actualizando el empleado" });
            } else {
                res.status(200).send({ status: 'Empleado actualizado' });
            }
        }
    }).clone().catch(function (err) { console.log(err) })


}


async function deleteEmpleado(req, res) {

    await Empleados.findByIdAndDelete(req.params.id, (err, userStored) => {
        if (err) {
            res.status(500).send({ message: "El empleado a eliminar no existe" });
        } else {
            res.status(200).send({ status: 'Empleado eliminado' });
        }
    }).clone().catch(function (err) { console.log(err) })


}

module.exports = {
    registrar,
    findById,
    findAll,
    updateEmpleado,
    deleteEmpleado
};