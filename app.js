//Utilizo file system fs
const funcionesDeTareas = require('./funcionesDeTareas');

//Utilizo process.argv[] para indicar que acción quiero ejecutar ( node + app.js + ?) ? = indice 2
let comando = process.argv[2];

switch (comando) {
    case 'listar':
        let tareas = funcionesDeTareas.listar();
        
        console.log("Listado de tareas:");
        console.log("-----------------");
        tareas.forEach((tarea, indice) => {
            console.log((indice + 1) + ' : ' + tarea.titulo + ' - ' + tarea.estado);
        });
        break;

    case 'crear':
        let tarea = process.argv[3];
        
        funcionesDeTareas.guardarTarea(tarea);
        console.log("Tarea creada correctamente :)");
        break;

    case 'filtrar':
        
        let estado = process.argv[3];
        //llamo a la función filtrarPorEstado y la guardo en una variable
        let tareasFiltradas = funcionesDeTareas.filtrarPorEstado(estado);
        //imprimo las tareas en la consola
        console.log('Tareas filtradas por estado: ' + estado);
        console.log('-------------------------------------');
        tareasFiltradas.forEach((tarea, indice) => {
            console.log((indice + 1) + ' : ' + tarea.titulo + ' - ' + tarea.estado);
        });
        break;

    case undefined:
        console.log('No has ingresado un comando');
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
