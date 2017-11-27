
var prevScroll = 0;
window.onscroll = function() {
	if ($(this).scrollTop() >= 45 && prevScroll < 45) { 
		$("#tma:hidden").css('visibility','visible');
		$(".content").css("height", "10vh"); 
		$("#tma:hidden").fadeIn('slow');
	} 
	else if ($(this).scrollTop() < 45 && prevScroll >= 45){
		$("#tma:visible").fadeOut("slow");
		$(".content").css("height", "100vh"); 
	}

	prevScroll = $(this).scrollTop();
}