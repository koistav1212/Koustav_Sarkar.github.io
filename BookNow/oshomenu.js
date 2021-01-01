var $page = $('.page');

$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
});
$('.content').on('click', function(){
  $page.removeClass('shazam');
});

$(document).ready(function () {
	

	$('#up').on('click', function () {
		$('html,body').animate({
			scrollTop:0
		},2000);
	});
	AOS.init({
		easing:'ease',
		duration:1800
	});
	AOS.init({disable: 'mobile'});
});