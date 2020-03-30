// JQuery
$(document).ready(function() {
	// delay container with overlay and popup
    $('.container').delay(2000).fadeIn(600);
	
	// close container with overlay and popup
	$('#close').click(function(){
		$('.container').fadeOut(600);
		$('.show-popup').fadeIn(600);
	});

	// show container with overlay and popup
	$('.show-popup').click(function(){
		$('.container').fadeIn(600);
	});

});