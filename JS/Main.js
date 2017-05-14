$(function() {
})

$(window).bind('scroll', function() {
	if ($(window).scrollTop() > 112) {
		$('#navbar-market').addClass('navbar-fixed-top');
		$(".mymain").addClass("fixednav");
		$(".mydata").css("padding-top", "54px");
	} else {
		$('#navbar-market').removeClass('navbar-fixed-top');
		$(".mymain").removeClass("fixednav");
		$(".mydata").css("padding-top", "0px");
	}
});