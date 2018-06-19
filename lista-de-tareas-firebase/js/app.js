// Inicializamos Firebase
// Configuracion
var config = {
    apiKey: "<API_KEY>",
    authDomain: "lista-de-tareas-firebase.firebaseapp.com",
    databaseURL: "https://lista-de-tareas-firebase.firebaseio.com",
    storageBucket: "lista-de-tareas-firebase.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };

  firebase.initializeApp(config);
var db = firebase.database();
// Seleccionamos la parte de la base de datos de la que queremos la referencia
var tareasRef = db.ref('tareas');


// Inicializamos VUE
new Vue({
		// Indicamos el ID del Div que contiene la APP Vue
	el: '#app',
	data: {
		nuevaTarea: '',
		mensajeTareaAgregada: false
	},
	// Con Vuefire enlazamos tarea (para mostrar) a la referencia de la base de datos en Firebird
	firebase: {
		tareas:tareasRef
	}
	,
	methods: {
		// Metodo para agregar una tarea
		agregarTarea: function(){
			// Crea una nueva tarea que mete al final del array "tarea"
			// La coge usando el valor de nuevaTarea, la fecha del sistema y la marca como no finalizada
			// Usamos tareaRef porque es la referencia a Firebase
			tareasRef.push({
				nombre: this.nuevaTarea.trim(),
				fecha: (new Date()).toString(),
				finalizada: false
			});
			// Tras agregar, pone nuevaTarea a vacio y marca mensajeTareaAgregada
			this.nuevaTarea = '';
			this.mensajeTareaAgregada = true;
		},
		actualizarTarea: function(tarea){
			// Eliminamos el hijo en la referencia a Firebase
			tareasRef.child(tarea['.key']).child('finalizada').set(!tarea.finalizada)
		},
		eliminarTarea: function(tarea){
			// Eliminamos el hijo en la referencia a Firebase
			tareasRef.child(tarea['.key']).remove()
		}
	}
	
});
