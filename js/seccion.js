$(document).ready(function(){
	var estado = false;
    
    
	$('#btn-toggle').on('click',function(){
		$('.seccionToggle').slideToggle();

		if (estado == true) {
			$(this).text("Glosario");
			$('body').css({
				"overflow": "auto"
			});
			estado = false;
		} else {
			$(this).text("Cerrar glosario");
			$('body').css({
				/*"overflow": "hidden"*/
			});
			estado = true;
		}
        });
        
        
	$('#tbs a:first').addClass('active');
	$('#secc article').hide();
	$('#secc article:first').show();

	$('#tbs li a').click(function(){
		$('#tbs li a').removeClass('active');
		$(this).addClass('active');
		$('#secc article').hide();

		var at = $(this).attr('href');
		$(at).show();
		return false;
	});
});