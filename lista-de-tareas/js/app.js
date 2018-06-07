new Vue({
	el: '#app',
	data: {
		nuevaTarea: '',
		tareas: [],
		mensajeTareaAgregada: false
	},
	methods: {
		// Metodo para agregar una tarea
		agregarTarea: function(){
			// Crea una nueva tarea que mete al final del array "tarea"
			// La coge usando el valor de nuevaTarea, la fecha del sistema y la marca como no finalizada
			this.tareas.push({
				nombre: this.nuevaTarea.trim(),
				fecha: new Date(),
				finalizada: false
			});
			// Tras agregar, pone nuevaTarea a vacio y marca mensajeTareaAgregada
			this.nuevaTarea = '';
			this.mensajeTareaAgregada = true;
		},
		eliminarTarea: function(tarea){
			// Busca el indice de la tarea y la elimina del array de tareas
			var indice = this.tareas.indexOf(tarea);

			this.tareas.splice(indice, 1);
		}
	}
});