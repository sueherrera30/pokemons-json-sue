
var cargarPagina = function(){
  pokecargador();
  /*$(document).on("click",".pokemoncitos",informacionCompleta);*/
 /* $('.modal').modal();*/
}

var pokecargador = function(){
  var url ="https://pokeapi.co/api/v2/pokemon/";
  $.get(url,function(response){
    var pokemones = response.results;
    mostrarPokemones(pokemones);
  });
};

  var plantillaPokemones = 
	
	  '<div class="poke-casa card col s3 ">'+
	  '<img class="responsive-img" src="assets/img/__nombre__.png" >'+'<p>__nombre__</p>'+  
	'</div>';
var mostrarPokemones = function(pokemones){
  var $casaPokemones= $("#poke-contenedor");
	var html = '';
  pokemones.forEach(function(pokemon){	  
   
    html += plantillaPokemones.replace(/__nombre__/g, pokemon.name)   
});
    $casaPokemones.html(html);
};

					

 /* var informacionCompleta = function () {
	var $casaPokemones= $("#poke-contenedor");
    var url = $(this).data("url");
     $.getJSON(url, function (response){
       $casaPokemones.html(
       plantillaPlaneta.replace("__nombre__", response.name)
       );
    });
 }*/
$(document).ready(cargarPagina);