import { Request, Response } from "express";
import { cxMysql } from "../mysqldb";

export const getEmpleado = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        alert("Error al buscar los empleados");
        return reject(err);
      }
      console.log("Conexion con MySQL: ", connection.threadId);
      connection.query("SELECT * FROM empleado limit 10", (err, results) => {
        if (err) console.error(err);
        return resolve(res.send(results));
      });
    });
  });

export const getEmpleadoById = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    const idEmp = parseInt(req.params.id);
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        alert("Error no se encontro el empleado");
        return reject(res.send(err));
      }
      connection.query(
        "SELECT * FROM empleado WHERE legajo = ?",
        [idEmp],
        (err, results) => {
          if (err) console.error(err);
          return resolve(res.send(results[0]));
        }
      );
    });
  });

export const cargarEmpleado = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    const {
      legajo,
      apellido,
      nombre,
      dni,
      sector,
      fecha_ingreso,
      activo,
    } = req.body;
    var value = [legajo, apellido, nombre, dni, sector, fecha_ingreso, activo];
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        alert("Error al cargar Empleado");
        return reject(res.send(err));
      } else {
        let sql: string =
          "INSERT INTO empleado(legajo, apellido, nombre, dni, sector, fecha_ingreso, activo) VALUES (?, ?, ?, ?, ?, ?, ?)";
        connection.query(sql, value, (err, results) => {
          if (err) {
            console.error(err);
            return reject(res.json({ message: "Error al tratar de cargar" }));
          } else {
            return resolve(res.json({ message: "Empleado gargado con exito" }));
          }
        });
      }
    });
  });

export const actualizarEmpleado = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    const {
      legajo,
      apellido,
      nombre,
      dni,
      sector,
      fecha_ingreso,
      activo,
    } = req.body;
    var values = [legajo, apellido, nombre, dni, sector, fecha_ingreso, activo];
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        alert("Error al conectarse con BD");
        return reject(res.send(err));
      } else {
        let sql: string =
          "UPDATE empleado SET apellido=?, nombre=?, dni=?, sector=?, fecha_ingreso=?, activo=? WHERE legajo=?";
        connection.query(sql, values, (err) => {
          if (err) {
            console.error(err);
            return reject(res.json({ message: "Error al actualizar " + err }));
          } else {
            return resolve(res.json({ message: "Empleado actualizado con exito" }));
          }
        });
      }
    });
  });

export const eliminarEmpleado = (req: Request, res: Response) =>
  new Promise((resolve, reject) => {
    const legajo = parseInt(req.params.legajo);
    cxMysql.getConnection((err, connection) => {
      if (err) {
        console.error(err);
        res.send(err);
        return;
      }
      connection.query(
        "DELETE FROM empleado WHERE legajo = ?",
        [legajo],
        (err) => {
          if (err) {
            console.error(err);
            return reject(res.json({ message: "Error al eliminar" }));
          } else {
            return resolve(res.json({ message: "Empleado eliminado con exito" }));
          }
        }
      );
    });
  });
