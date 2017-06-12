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
	
	  '<div class="pokemoncitos card col s3 " data-info ="__url__">'+
	  '<img class="responsive-img" src="assets/img/__nombre__.png" >'+'<p>__nombre__</p>'+  
	'</div>';

var mostrarPokemones = function(pokemones){
  var $casaPokemones= $("#poke-contenedor");
	var html = '';
	var url = "https://pokeapi.co/api/v2/pokemon-species/1/"
  pokemones.forEach(function(pokemon){	  
   
    html += plantillaPokemones.replace(/__nombre__/g, pokemon.name)   
});
	
    $casaPokemones.html(html);
};

	var plantillaMondal=
	'<div id="modal1" class="modal">'+
    '<div class="modal-content">'+
    '<h4>Poke-informacion</h4>'+
    '<p><strong>color:</strong>__color__</p>'+
	'<p><strong>habitat:</strong>__habitat__</p>'+
	'<p><strong>shape:</strong>__shape__</p>'+
	
		
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>

  var informacionCompleta = function () {
	
 }
$(document).ready(cargarPagina)