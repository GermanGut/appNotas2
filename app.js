const process = require("process");
const {leerArchivo, guardarTarea, crearTarea, filtrarPorEstado} = require('./funcionesDeTareas');

const accion = process.argv[2];

switch (accion) {
    case "listar":
        const tareas = leerArchivo();

        console.log('Listado de tareas');
        console.log('------------------');
        tareas.forEach((tarea, i) => {
            console.log(`${i + 1}. ${tarea.titulo} --> ${tarea.estado}`);
        });
        console.log('--------------------------------------');
        break;

    case "crear":
        let nuevaTarea = new crearTarea(process.argv[3].trim())
            guardarTarea(nuevaTarea);
            console.log(nuevaTarea.titulo + " ha sido creada")
        break;

    case "filtrar":
        let tareasFiltradas = filtrarPorEstado(process.argv[3]);
        tareasFiltradas.forEach((tarea, i) => {
            console.log(`${i + 1}. ${tarea.titulo} --> ${tarea.estado}`);
        });
        console.log('--------------------------------------');
        break;

    case undefined:
        console.log('---------------------------------------');
        console.log("Atención - Tienes que pasar una acción.");
        console.log('---------------------------------------');
        break;

    default:
        console.log('--------------------------------------');
        console.log("    No entiendo qué quieres hacer.");
        console.log('--------------------------------------');
        break;
}