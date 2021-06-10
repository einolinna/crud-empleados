import { obtenerEmpleados, eliminarEmpleado } from './API.js';
import { formatDate } from './funciones.js'
(function() {
    const listado = document.querySelector('#listado-empleados');

    document.addEventListener('DOMContentLoaded', mostrarEmpleados);

    listado.addEventListener('click', confirmarEliminar);

    async function mostrarEmpleados() {
        const empleados = await obtenerEmpleados();

        empleados.forEach( empleado => {
            const { legajo, apellido, nombre, dni, sector, fecha_ingreso, activo } = empleado;

            const row = document.createElement('tr');

            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${legajo} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">   
                    <p class="text-sm leading-10 text-gray-700"> ${apellido} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"> 
                    <p class="text-sm leading-10 text-gray-700"> ${nombre} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${dni}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${formatDate(fecha_ingreso)}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700"> 
                    <p class="text-gray-600">${sector}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700"> 
                    <p class="text-gray-600">${activo}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-empleado.html?id=${legajo}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-empleado="${legajo}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listado.appendChild(row);
        });
    }

    function confirmarEliminar(e) {
        if(e.target.classList.contains('eliminar')) {
            const empleadoId = parseInt( e.target.dataset.empleado );

            console.log(empleadoId);

            const confirmar = confirm('¿Deseas eliminar este registro?');

            if(confirmar) {
                eliminarEmpleado(empleadoId);
            }
        }
    }
})();