function pintarBotonesHeader() {
  $(".icon-home").button();
  $(".icon-exit").button();
};

$(document).ready(function() {  
          pintarBotonesHeader();          
});

function refrescarFavoritos(){
	$('aside').load('/favorite');	
}
