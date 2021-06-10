create table empleado (
legajo bigint,
apellido varchar(15),
nombre varchar(15),
dni bigint,
sector varchar(20),
fecha_ingreso date,
activo boolean,
primary key(legajo)
);
