import { obtenerEmpleado, editarEmpleado } from './API.js';
import { mostrarAlerta, validar, formatDate } from './funciones.js';

(function() {
    // Campos del formulario
    const legajoInput = document.querySelector('#legajo');
    const apellidoInput = document.querySelector('#apellido');
    const nombreInput = document.querySelector('#nombre');
    const dniInput = document.querySelector('#dni');
    const sectorInput = document.querySelector('#sector');
    const fechaIngresoInput = document.querySelector('#fechaingreso');
    const activoInput = document.querySelector('#activo');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idEmpleado = parseInt( parametrosURL.get('id') );

        const empleado = await obtenerEmpleado(idEmpleado);
        mostrarEmpleado(empleado);

        // Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarEmpleado);
    });

    function mostrarEmpleado(empleado) {
        
        const { legajo, apellido, nombre, dni, sector, fecha_ingreso, activo } = empleado;

        legajoInput.value = legajo;
        apellidoInput.value = apellido;
        nombreInput.value = nombre;
        dniInput.value = dni;
        sectorInput.value = sector;
        fechaIngresoInput.value = formatDate(fecha_ingreso);
        activoInput.value = activo;
    }

    function validarEmpleado(e) {
        e.preventDefault();
        
        const empleado = {
            legajo: parseInt(legajoInput.value),
            apellido: apellidoInput.value,
            nombre: nombreInput.value,
            dni: dniInput.value, 
            sector: sectorInput.value,
            fechaingreso: fechaIngresoInput.value,
            activo: activoInput.value
        }
        
        if( validar(empleado)) {
            // Mostrar mensaje
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        // Reescribe el objeto
        editarEmpleado(empleado);

    }


})();