//requiero el módulo fs para poder leer el archivo
const fs = require('fs');

let funcionesDeTareas = {
    archivo : './tareas.json',
    listar: function(){
        //Leo el archivo tareas.json y lo guardo en una variable
        let archivo = fs.readFileSync(this.archivo, 'utf-8');
        //Convierto el archivo en un objeto JSON
        let tareas = JSON.parse(archivo);
        return tareas;
    },
    escribirJSON : function(tareas){
        //Convierto el objeto JSON en un string
        let tareasJSON = JSON.stringify(tareas);
        //Escribo el string en el archivo tareas.json
        fs.writeFileSync(this.archivo, tareasJSON);
    },
    guardarTarea: function(titulo){
        //Leo el archivo tareas.json y lo guardo en una variable
        let tareas = this.listar();
        //Creo una nueva tarea
        let nuevaTarea = {
            titulo: titulo,
            estado: 'pendiente'
        };
        //Añado la nueva tarea al array de tareas
        tareas.push(nuevaTarea);
        //Escribo el array de tareas en el archivo tareas.json
        this.escribirJSON(tareas);
    },
    filtrarPorEstado: function(estado){
        //Leo el archivo tareas.json y lo guardo en una variable
        let tareas = this.listar();
        //Creo un array para guardar las tareas filtradas
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado);
        return tareasFiltradas;
    }
 }

module.exports = funcionesDeTareas;