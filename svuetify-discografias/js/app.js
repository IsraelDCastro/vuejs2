
// Definimos el router y los componentes asociados a cada ruta (Inicio, Artista y NoEncontrado 
// Mas informacion https://vuejs.org/v2/guide/routing.html
const router = new VueRouter({
	routes: [
		{path: '/', component: Inicio},
		{path: '/artista/:artista', component: Artista},
		{path: '*', component: NoEncontrado}
	]
});

const app = new Vue({
	router,
	// Mapeamos los datos del json
	data(){
		return {
			artistas: json.artistas,
			mostrarFormulario: false,
			nuevoArtista: {
				imagen: '',
				nombre: '',
				descripcion: ''
			}
		}
	},
	// Metodo para agregar un nuevo artista (sin discos) 
	methods: {
		agregarArtista: function(){
			this.artistas.push({
				id: json.artistas.length + 1,
				nombre: this.nuevoArtista.nombre,
				imagen: this.nuevoArtista.imagen,
				descripcion: this.nuevoArtista.descripcion,
				discos: []
			});

			this.limpiarFormulario();
		},
		// Metodo para limpiar el formulario
		limpiarFormulario: function(){
			this.nuevoArtista = {
				imagen: '',
				nombre: '',
				descripcion: ''
			};
		}
	}
	// Indicamos sobre que id se monta la aplicaicon
}).$mount('#app');