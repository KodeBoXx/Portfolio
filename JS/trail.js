$(function() {
	$(".myleft").hide();
});
$(".myright").on('click', function() {
	var addon = parseInt($('.box').css("left")) - $(".allboxx").width() + 200;
	if (($('.box').width() - $(".allboxx").width()) < -(addon)) {
		$('.box').css({
			left : -($('.box').width() - $(".allboxx").width()) + 'px',
			transition : 'left 1s'
		});
		$(".myright").hide();
	} else {
		$('.box').css({
			left : addon + 'px',
			transition : 'left 1s'
		});
		$(".myleft").show();
	}
});
$(".myleft").on('click', function() {
	var addon = parseInt($('.box').css("left")) + $(".allboxx").width() - 200;
	if (addon > 0) {
		$('.box').css({
			left : 0 + 'px',
			transition : 'left 1s'
		});
		$(".myleft").hide();
	} else {
		$('.box').css({
			left : addon + 'px',
			transition : 'left 1s'
		});
		$(".myright").show();
	}
});