"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarEmpleado = exports.actualizarEmpleado = exports.cargarEmpleado = exports.getEmpleadoById = exports.getEmpleado = void 0;
const mysqldb_1 = require("../mysqldb");
const getEmpleado = (req, res) => new Promise((resolve, reject) => {
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            alert("Error al buscar los empleados");
            return reject(err);
        }
        console.log("Conexion con MySQL: ", connection.threadId);
        connection.query("SELECT * FROM empleado limit 10", (err, results) => {
            if (err)
                console.error(err);
            return resolve(res.send(results));
        });
    });
});
exports.getEmpleado = getEmpleado;
const getEmpleadoById = (req, res) => new Promise((resolve, reject) => {
    const idEmp = parseInt(req.params.id);
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            alert("Error no se encontro el empleado");
            return reject(res.send(err));
        }
        connection.query("SELECT * FROM empleado WHERE legajo = ?", [idEmp], (err, results) => {
            if (err)
                console.error(err);
            return resolve(res.send(results[0]));
        });
    });
});
exports.getEmpleadoById = getEmpleadoById;
const cargarEmpleado = (req, res) => new Promise((resolve, reject) => {
    const { legajo, apellido, nombre, dni, sector, fecha_ingreso, activo, } = req.body;
    var value = [legajo, apellido, nombre, dni, sector, fecha_ingreso, activo];
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            alert("Error al cargar Empleado");
            return reject(res.send(err));
        }
        else {
            let sql = "INSERT INTO empleado(legajo, apellido, nombre, dni, sector, fecha_ingreso, activo) VALUES (?, ?, ?, ?, ?, ?, ?)";
            connection.query(sql, value, (err, results) => {
                if (err) {
                    console.error(err);
                    return reject(res.json({ message: "Error al tratar de cargar" }));
                }
                else {
                    return resolve(res.json({ message: "Empleado gargado con exito" }));
                }
            });
        }
    });
});
exports.cargarEmpleado = cargarEmpleado;
const actualizarEmpleado = (req, res) => new Promise((resolve, reject) => {
    const { legajo, apellido, nombre, dni, sector, fecha_ingreso, activo, } = req.body;
    var values = [legajo, apellido, nombre, dni, sector, fecha_ingreso, activo];
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            alert("Error al conectarse con BD");
            return reject(res.send(err));
        }
        else {
            let sql = "UPDATE empleado SET apellido=?, nombre=?, dni=?, sector=?, fecha_ingreso=?, activo=? WHERE legajo=?";
            connection.query(sql, values, (err) => {
                if (err) {
                    console.error(err);
                    return reject(res.json({ message: "Error al actualizar " + err }));
                }
                else {
                    return resolve(res.json({ message: "Empleado actualizado con exito" }));
                }
            });
        }
    });
});
exports.actualizarEmpleado = actualizarEmpleado;
const eliminarEmpleado = (req, res) => new Promise((resolve, reject) => {
    const legajo = parseInt(req.params.legajo);
    mysqldb_1.cxMysql.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        connection.query("DELETE FROM empleado WHERE legajo = ?", [legajo], (err) => {
            if (err) {
                console.error(err);
                return reject(res.json({ message: "Error al eliminar" }));
            }
            else {
                return resolve(res.json({ message: "Empleado eliminado con exito" }));
            }
        });
    });
});
exports.eliminarEmpleado = eliminarEmpleado;
//# sourceMappingURL=EmpleadoController.js.map