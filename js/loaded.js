$(window).load(function() {
	setTimeout(function() {
		$('body').addClass('loaded');
		$('header>h1#load-header').css('display','none');
	}, 3000);
});