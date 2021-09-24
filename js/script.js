jQuery( document ).ready(function(){
    $(function (){
    $("#Open").click(function(){
    $(".header-modal-back").toggle(400); 
 });
});
});

jQuery(document).ready(function(){
	$(function(){
	$('.popular').on('click', function(){
		$('.Kontent3-blocks-carts').css('display', 'inline-block');
	});
	$('.skidka').on('click', function(){
		$('.novinka-block').css('display', 'none');
		$('.skidka-block').css('display', 'inline-block');
	});
	$('.Novika').on('click', function(){
		$('.skidka-block').css('display', 'none');
		$('.novinka-block').css('display', 'inline-block');
	});
});
});
