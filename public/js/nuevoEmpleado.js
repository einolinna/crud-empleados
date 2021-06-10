import { mostrarAlerta, validar } from './funciones.js';
import { nuevoEmpleado } from './API.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarEmpleado);

    function validarEmpleado(e) {
        e.preventDefault();
        
        const legajo = document.querySelector('#legajo').value;
        const apellido = document.querySelector('#apellido').value;
        const nombre = document.querySelector('#nombre').value;
        const dni = document.querySelector('#dni').value;
        const sector = document.querySelector('#sector').value;
        const fechaIngreso = document.querySelector('#fechaingreso').value;
        const activo = document.querySelector('#activo').value;

        const empleado = {

            legajo,
            apellido,
            nombre,
            dni,
            sector,
            fechaIngreso,
            activo
        }

        
        
        if( validar(empleado)) {
            
            // Mostrar mensaje
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }
        debugger;
        nuevoEmpleado(empleado);
    }





})();