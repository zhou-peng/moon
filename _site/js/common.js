$(function(){

	setWindow();
	$(window).resize(function(){
		setWindow();
	});

});

function setWindow(){
	var height = $(window).height();
	$(".body").css({"min-height": height-182});
}