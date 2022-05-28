const fs = require('fs');

    const leerArchivo = function () {
        let tareas = fs.readFileSync("./tareas.json", 'utf8');
        return JSON.parse(tareas);
    };
    const escribirJSON = function(tareas) {
        let tareasStringify = JSON.stringify(tareas, null, 3);
        fs.writeFileSync("./tareas.json", tareasStringify, 'utf-8')
    };
    const crearTarea = function(titulo) {
        this.titulo = titulo;
        this.estado = "pendiente"
    };
    const guardarTarea = function(tarea) {
        let tareas = leerArchivo();
        tareas.push(tarea);
        escribirJSON(tareas)
    };
     const filtrarPorEstado = function(estado) {
        let tareas = leerArchivo()
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado);
        return tareasFiltradas
    };

module.exports = {
    leerArchivo,
    escribirJSON,
    crearTarea,
    guardarTarea,
    filtrarPorEstado
};