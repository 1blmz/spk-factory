$(document).ready(function() {
    new Mmenu("#menu", {
        theme: "white",
        navbars: [
            {
                position: 'top',
                content: ['prev', 'searchfield', 'close']
            },
            {
                position: 'bottom',
                content: [
                    `
                    <div class="mb-bottom d-flex flex-column">
                        <div class="mb-info d-flex flex-column">
                            <a href="#" class="mb-info__item d-flex align-center">
                                <svg class="icon"><use xlink:href="images/symbols.svg#mapMaker"></use></svg>
                                <span>Пермь, ул. Героев Хасана 45А</span>
                            </a>
                            <a href="mailto:info@proftest.ru" class="mb-info__item d-flex align-center">
                                <svg class="icon"><use xlink:href="images/symbols.svg#mail"></use></svg>
                                <span>info@proftest.ru</span>
                            </a>
                            <a href="tel:79002224132" class="mb-info__item d-flex align-center">
                                <svg class="icon"><use xlink:href="images/symbols.svg#phone"></use></svg>
                                <span>+7 (900) 222 41-32</span>
                            </a>
                        </div>
                        <div class="mb-socials d-flex align-center">
                            <div class="question__socials d-flex align-center justify-space-between">
                                <a href="#">
                                    <svg class="icon"><use xlink:href="images/symbols.svg#ok"></use></svg>
                                </a>
                                <a href="#">
                                    <svg class="icon"><use xlink:href="images/symbols.svg#instagram"></use></svg>
                                </a>
                                <a href="#">
                                    <svg class="icon"><use xlink:href="images/symbols.svg#youtube"></use></svg>
                                </a>
                                <a href="#">
                                    <svg class="icon"><use xlink:href="images/symbols.svg#twitter"></use></svg>
                                </a>
                                <a href="#">
                                    <svg class="icon"><use xlink:href="images/symbols.svg#whatsapp"></use></svg>
                                </a>
                                <a href="#">
                                    <svg class="icon"><use xlink:href="images/symbols.svg#viber"></use></svg>
                                </a>
                                <a href="#">
                                    <svg class="icon"><use xlink:href="images/symbols.svg#telegram"></use></svg>
                                </a>
                                <a href="#">
                                    <svg class="icon"><use xlink:href="images/symbols.svg#vk"></use></svg>
                                </a>
                            </div>
                        </div>
                        <div class="mb-text d-flex align-center justify-center">
                            <span>Создание и продвижение сайтов - Praweb.ru</span>
                        </div>
                    </div>

                    `
                ]
            }
        ],
        offCanvas: {
            position: "left",
            page: {
                selector: "mm-page"
            }
        },
        setSelected	: {
            hover: true
        },
    });
    $(window).load(function () {
        $('.home__slider-video').show();
    });
    $.ripple('.is-ripples', {
        multi: true,
        color: "auto",
        duration: "auto",
        opacity: "auto"
    });
    $('.home__sliders').slick({
        slideToShow: 1,
        slideToScroll: 1,
        dots: true,
        arrows: false,
        appendDots: $('.home__slide-navigation-inner'),
        dotsClass: 'home__slide-dots',
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
        customPaging : function(slider, i) {
            return '<a href="#" class="home__slide-dot" onclick="return false;"></a>';
        },
    });
    $('.home__slide-next').on('click', function() {
        return $(".home__sliders")[0].slick.slickNext(),
        !1
    });
    $('.home__slide-prev').on('click', function() {
        return $(".home__sliders")[0].slick.slickPrev(),
        !1
    });
    $('.partners__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        variableWidth: false,
        infinite: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 975,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 525,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    $('.partners__next').on('click', function() {
        return $(".partners__slider")[0].slick.slickNext(),
        !1
    });
    $('.partners__prev').on('click', function() {
        return $(".partners__slider")[0].slick.slickPrev(),
        !1
    });
    if ($(this).scrollTop() >= 500) {
        $('.page-scroll').addClass('page-scroll--scrolled');
    } else {
        $('.page-scroll').removeClass('page-scroll--scrolled');
    }
    if ($(this).scrollTop() >= 192) {
        $('.header').addClass('header--fixed');
    } else {
        $('.header').removeClass('header--fixed');
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            $('.page-scroll').addClass('page-scroll--scrolled');
        } else {
            $('.page-scroll').removeClass('page-scroll--scrolled');
        }
        
        if ($(this).scrollTop() >= 192) {
            $('.header').addClass('header--fixed');
            $('.header__bottom-logo-fixed').attr('src', 'images/logotype--small.svg');
        } else {
            $('.header').removeClass('header--fixed');
            if(!$('.header').hasClass('header--white')) {
                $('.header__bottom-logo-fixed').attr('src', 'images/logotype--small-white.svg');
            }
        }
    });
    $('.page-scroll a[href^="#"]').click(function(e){ // #1
        e.preventDefault();
        let anchor = $(this).attr('href');
        let scrollPx = $(anchor).offset().top - 58 
        $('html, body').animate({           
            scrollTop:  scrollPx
        }, 600);                            
    });

    $('#searchBtn').click(function (e) {
        e.preventDefault();
        if ($('.header').hasClass('header--search')) {
            $('.header').removeClass('header--search');
            $(this).find('span').html('Поиск');
        } else {
            $('.header').addClass('header--search');
            $(this).find('span').html('Скрыть');
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.header').length) {
            $('.header').removeClass('header--search');
            $('#searchBtn').find('span').html('Поиск');
        }
    });
});