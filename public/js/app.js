$.getJSON("http://pokeapi.co/api/v2/pokemon", function(response){
	var pokemons = response.results;
	constructorDePokemones(pokemons);
});


function constructorDePokemones(pokemons){
 var $pokeContenedor = $(".poke-contenedor");
	
pokemons.forEach(function(pokemon){
	 /*creamos elementos*/
	var $fila = $("<div/>", {"class":"row"});
	var $contenedorPokemon = $("<div/>",{"class":"col s3 offset-s1 card"});
	var $imagen = $("<img>",{"class":"responsive-img pokeImagen"});
	$imagen.attr("src","assets/img/beedrill.png");
	var $textoNombre = $("<p/>");
	
	$textoNombre.text(pokemons.name);
	 $contenedorPokemon.data("nombre:"+pokemon.name);
	
	$contenedorPokemon.append($textoNombre);
	$contenedorPokemon.append($imagen);
	$contenedorPokemon.append($textoNombre);
	$fila.append($contenedorPokemon);
	$pokeContenedor.append($fila);

 });
}