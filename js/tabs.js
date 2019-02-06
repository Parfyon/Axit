$(document).ready(function(){
	$('#tab_1').addClass('color');
	$("#tab_1").click(function(){
		$(this).addClass('color');
		$('#text_2, #text_3').css({'display':'none'});
		/*$('#text_1').css({'display':'block'});*/
		$('#text_1').fadeIn(1000);
		$('#tab_2').removeClass('color');
		$('#tab_3').removeClass('color');
			if($('#text_1').css("display")==="none"){
				$(this).css({"display":''});
			}
	});
	$("#tab_2").click(function(){
		$(this).addClass('color');
		$('#text_1, #text_3').css({'display':'none'});
		/*$('#text_2').css({'display':'block'});*/
		$('#text_2').fadeIn(1000);
		$('#tab_1').removeClass('color');
		$('#tab_3').removeClass('color');
			if($('#text_2').css("display")==="none"){
				$(this).css({"display":''});
			}
	});
	$("#tab_3").click(function(){
		$(this).addClass('color');
		$('#text_1, #text_2').css({'display':'none'});
		/*$('#text_3').css({'display':'block'});*/
		$('#text_3').fadeIn(1000);
		$('#tab_1').removeClass('color');
		$('#tab_2').removeClass('color');
			if($('#text_3').css("display")==="none"){
				$(this).css({"display":''});
			}
	});
});