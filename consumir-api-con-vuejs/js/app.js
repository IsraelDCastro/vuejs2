new Vue({
	// Indicamos el DIV donde esta nuestra APP Vue
	el: '#app',
	data: {
		usuarios: []
	},
	/*
	Al ser creada la aplicacion de VUE2JS https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
	Hacemos una peticion GET a la URL. Al recibir la respuesta en formato JSON, simplemente
	mapeamos dicha respuesta a la variable usuarios
	*/
	created: function(){
		this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(response){
			this.usuarios = response.data;
		});
	}
});