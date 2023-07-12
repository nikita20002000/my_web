$(document).ready(function() {
    var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');
		$body = $('.body');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(320);
		$body.next().slideToggle(320)
	});

});