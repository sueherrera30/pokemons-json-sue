$.getJSON("http://pokeapi.co/api/v2/pokemon", function(response){
	var pokemons = response.results;
	constructorDePokemones(pokemons);
});

function constructorDePokemones(){
	
}