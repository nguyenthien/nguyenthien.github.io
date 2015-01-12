/* CENTER HERO CONTENT VERTICALY */
function heroContent() {
    var winHeight = $(window).innerHeight();

    // @ screen width => 992px
    if ($(window).width() >= 992) {
        var heroContentMargin = -($('.hero-content').height() / 2);

        $('.hero-content').css('margin-top', heroContentMargin);
    }

    // @ screen width => 768px and <= 991px
    else if ($(window).width() >= 768 && $(window).width() <= 991) {
        $('.hero-content').css('margin-top', '0');

        var heroContentHeight = $('.hero-content-wrap').height();

        if ((winHeight - 100) <= heroContentHeight) {
            $('.hero-content-wrap').css('margin', '110px 0 60px');
        }

        else {
            var heroContentMargin = (50 + ((winHeight - 100) - heroContentHeight)) / 2;

            $('.hero-content-wrap').css('margin-top', heroContentMargin);
        }
    }

    // @ screen width <= 767px
    else {
        $('.hero-content').css('margin-top', '0');

        var heroContentHeight = $('.hero-content-wrap').height();

        if ((winHeight - 50) <= heroContentHeight) {
            $('.hero-content-wrap').css('margin', '110px 0 60px');
        }

        else {
            var heroContentMargin = (50 + (winHeight - heroContentHeight)) / 2;

            $('.hero-content-wrap').css('margin-top', heroContentMargin);
        }
    }
    ;
};

/* CLOSE NAVBAR TOGGLE WHEN NAVBAR LINK CLICKED */
function navbarToggle() {
    if ($(window).width() <= 767) {
        $('.nav-style > li > a').on('click', function () {
            $('.navbar-toggle').click();
        });
    }
};


/* REFRESH SCROLLSPY */
function scrollSpyRefresh() {
    $('[data-spy="scroll"]').each(function () {
        $(this).scrollspy('refresh')
    });
};

$(document).ready(function () {

    // launch the custom functions
    heroContent();
    navbarToggle();

    /* INIT GALLERY FEATURE WITH JQUERY MIXITUP PLUGIN */
    $('#grid').mixitup();


    /* INIT PAGE SCROLLING USING JQUERY SCROLLTO-LOCALSCROLL PLUGIN */
    $('html').localScroll();
    $('a[href="#"], .togglize-btn').unbind('click'); // fix localscroll effect


    /* INIT SKILL CIRCLE GRAPHIC WITH JQUERY KNOB PLUGIN */
    var dialColor = '#87ceeb'; //$('a').css('color'); // get color from link color

    $(".dial").knob({
        'bgColor': '#ceebf7',
        'fgColor': dialColor,
        'lineCap': 'round',
        'thickness': '.2',
        'bgColor': '#fafafa',
        'readOnly': 'readonly',
        'displayInput': true
    });


    /* INIT ACCORDION STATUS STYLE */
    $('.togglize-btn').addClass('collapsed'); // add collapsed class to toggle button

    $('.togglize-btn').each(function () {
        var toggleBtn = $(this);

        // remove collapsed class if toggle initially active
        if (toggleBtn.siblings().hasClass('in')) {
            toggleBtn.removeClass('collapsed');
            toggleBtn.addClass('open');
        }

        else {
            toggleBtn.removeClass('open');
        }
        ;

        toggleBtn.on('click', function () {
            if ($(this).hasClass('collapsed') !== true) {
                $(this).removeClass('open');
            }

            else {
                $(this).addClass('open');
            }
        });
    });


    // fade out message sending notification on scroll
    $(window).bind('scroll', function () {
        $('#contact-sending-error, #contact-sending-success').fadeOut(250);
    });


    /* FIRE SCROLLSPY REFRESH RIGHT AFTER USER STOPS SCROLLING */
    var timer;

    var refresh = function () {
        scrollSpyRefresh();
    };

    $(window).bind('scroll', function () {
        clearTimeout(timer);
        timer = setTimeout(refresh, 250);
    });

});

// do the following function on window resize
$(window).on('resize', function () {
    heroContent();
    navbarToggle();
    scrollSpyRefresh();
});
