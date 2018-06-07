new Vue({
	// Indicamos el ID del Div que contiene la APP Vue
	el: '#app',
	data: {
		// Valor definido por defecto de la variable codigo
		codigo: [
			'<h1>Hola mundo</h1>',
			'<div class="alert alert-success">',
			'Editor b&aacute;sico con Vue.js',
			'</div>',
			'<a href="http://calirojas.com">calirojas.com</a>'].join('')
			// Se usa join al final para convertir el array en una sola String
	}
});