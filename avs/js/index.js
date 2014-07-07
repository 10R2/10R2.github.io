
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    var navbar = $(".navbar");
    if (navbar.length) {
        if ($(".navbar").offset().top > 80) {
            $(".navbar-fixed-top").removeClass("top-nav-expanded");
        } else {
            $(".navbar-fixed-top").addClass("top-nav-expanded");
        }
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var ref = $(this).attr('href');
        $('section').removeClass('active');
        $('section' + ref).addClass('active');
        //var section = $('section' + ref);
        //console.log('section' + ref + ': ' + section.length);
        $('html, body').stop().animate({
            scrollTop: $(ref).offset().top - 46 /* navbar height */
        }, 2000, 'easeOutExpo');
        event.preventDefault();
    });
});

// carousel slider
$(function() {
    var c = '.carousel';
    $(c).carousel({interval: 4000})
        // .carousel('pause')
        .on('slide.bs.carousel', function(e) {
            // need to remove .active before changing direction to avoid flickering
            var out_ = $(c + ' .active').removeClass('active'),
                in_  = e.relatedTarget,
                items = $([out_[0], in_]);
            (e.direction === 'left')
                ? items.addClass('left_').removeClass('right_')
                : items.addClass('right_').removeClass('left_');
            out_ = out_.attr('data-index');
            in_  = $(in_).attr('data-index');
            $(c).addClass('_' + in_).removeClass('_' + out_);
        });
});

// parallax CSS slider
/* $(function() {
    $('#da-slider').cslider();
}); */

// cycle slider
/* $(function() {
    $('.slides').cycle({
		fx:   'fade', // scrollLeft
		speed:   2000,
		timeout: 2000,
		
		before: function(in_, out_) {
            console.log('before: ' 
                + $(in_).attr('class') + ' '
                + $(out_).attr('class'));
            $(in_).addClass('before');
            $(out_).addClass('after');
		},
		
		after: function(in_, out_) {
            console.log('after: ' 
                + $(in_).attr('class') + ' '
                + $(out_).attr('class'));
            // console.log('after');
            $(in_).removeClass('before');
            $(out_).removeClass('after');
		},
	});
}); */
