$(document).ready(function() {
	 var $panel = $(".panel");
	 var $section = $(".section");

	$section.on('click', function(e){
		$(".panel.show").removeClass("show");
		$(this).siblings('.panel').addClass('show');
	})
});