$(window).scroll(function() {
	wScroll = $(this).scrollTop();
	$(".logo").css({
		'transform' : 'translate(0px,' + wScroll / 3 + '%)'
	});
	$(".mid-back-img").css({
		'transform' : 'translate(0px,' + wScroll / 7 + '%)'
	});
	$(".fore-back-img").css({
		'transform' : 'translate(0px,-' + wScroll / 20 + '%)'
	});
});