const url = 'http://localhost:3000/empleados';


export const nuevoEmpleado = async empleado => {

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( empleado ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}


export const obtenerEmpleados = async () => {
    try {
        const resultado = await fetch(url);
        const empleados = await resultado.json();
        console.log(empleados)
        return empleados;
    } catch (error) {
        console.log(error);
    }
}


export const eliminarEmpleado = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}


export const obtenerEmpleado = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const empleado = await resultado.json();
        return empleado;
    } catch (error) {
        console.log(error);
    }
}


export const editarEmpleado = async empleado => {
    try {
        await fetch(`${url}/${empleado}`, {
            method: 'PUT',
            body: JSON.stringify(empleado),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}