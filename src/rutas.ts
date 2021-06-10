import { Router } from "express";
import {
  getEmpleado,
  getEmpleadoById,
  cargarEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
} from "./controller/EmpleadoController";

const router = Router();

router.get("/empleados", getEmpleado);
router.get("/empleados/:id", getEmpleadoById);
router.post("/insert", cargarEmpleado);
router.put("/update", actualizarEmpleado);
router.delete("/delete/:id", eliminarEmpleado);

export default router;
