export class Empleado {
  legajo: number;
  apellido: string;
  nombre: string;
  dni: number;
  sector: string;
  fecha_ingreso: Date; //CREAR UNA FUNCION QUE ME FORMATEE EL DATE
  activo: boolean;

  constructor(
    legajo: number,
    apellido: string,
    nombre: string,
    dni: number,
    sector: string,
    fecha_ingreso: Date,
    activo: boolean
  ) {}
}
