"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EmpleadoController_1 = require("./controller/EmpleadoController");
const router = express_1.Router();
router.get("/empleados", EmpleadoController_1.getEmpleado);
router.get("/empleados/:id", EmpleadoController_1.getEmpleadoById);
router.post("/insert", EmpleadoController_1.cargarEmpleado);
router.put("/update", EmpleadoController_1.actualizarEmpleado);
router.delete("/delete/:id", EmpleadoController_1.eliminarEmpleado);
exports.default = router;
//# sourceMappingURL=rutas.js.map