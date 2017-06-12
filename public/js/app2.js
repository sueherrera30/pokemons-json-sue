var cargarPagina = function(){
  pokecargador();
  $(document).on("click",".pokemoncitos",informacionCompleta);
  $('.modal').modal();
}

var pokecargador = function(){
  var url ="https://pokeapi.co/api/v2/pokemon/";
  $.get(url,function(response){
    var pokemones = response.results;
    mostrarPokemones(pokemones);
  });
};

  var plantillaPokemones = 
	  '<div class="pokemoncitos card col s3" data-info ="__url__">'+
	  '<img class="responsive-img " src="assets/img/__nombre__.png" >'+'<p class="center green-text">__nombre__</p>'+  
	'</div>';

var mostrarPokemones = function(pokemones){
  var $casaPokemones= $("#poke-contenedor");
	var html = '';
  pokemones.forEach(function(pokemon){	  
	var url = pokemon.url.replace("pokemon","pokemon-species");
	console.log(url);
   
    html += plantillaPokemones.replace(/__nombre__/g, pokemon.name).replace("__url__",url);
});
	
    $casaPokemones.html(html);
};


  var informacionCompleta = function () {
	var urlEspecie = $(this).data("info");
	$.get(urlEspecie,function(response){
    
  $("#color").text(response.color.name);
  $("#habitat").text(response.habitat.name);
  $("#shape").text(response.shape.name);
  $("#genera").text(response.genera[0].name);	
 }
)};


$(document).ready(cargarPagina)