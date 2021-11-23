$(function () {
	$(window).scroll(function () {
		var winh = $(window).height();
		var scrolled = $(window).scrollTop();
		$(".fullpage").each(function () {
			var objpos = $(this).offset().top;
			if (scrolled > objpos - winh * 0.2 && scrolled < objpos + winh * 0.8) {
				$(this).addClass("slideup");
			}
			if (scrolled > objpos + winh * 0.8) {
				$(this).removeClass("slideup");
				$(this).addClass("slideout");
				$(this).removeClass("t");

			}

			if (scrolled == 0) {
				$(this).removeClass("slideup");
			}
		});
	});
});
