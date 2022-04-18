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
                    "'<div class='mb-bottom d-flex flex-column'>" +
                        "'<div class='mb-info d-flex flex-column'>" +
                            "'<a href='#' class='mb-info__item d-flex align-center'>" +
                                "'<svg class='icon'><use xlink:href='images/symbols.svg#mapMaker'></use></svg> " +
                                "'<span>Пермь, ул. Героев Хасана 45А</span>" +
                            "'</a>" +
                            "'<a href='mailto:info@proftest.ru' class='mb-info__item d-flex align-center'>" +
                            "'<svg class='icon'><use xlink:href='images/symbols.svg#mail'></use></svg>" +
                            "'<span>info@proftest.ru</span>" +
                            "'</a>" +
                            "'<a href='tel:79002224132' class='mb-info__item d-flex align-center'>" +
                            "'<svg class='icon'><use xlink:href='images/symbols.svg#phone'></use></svg>" +
                            "'<span>+7 (900) 222 41-32</span>" +
                            "'</a>" +
                            "'</div>" +
                            "'<div class='mb-socials d-flex align-center'>" +
                            "'<div class='question__socials d-flex align-center justify-space-between'>" +
                            "' <a href='#'>" +
                            "'<svg class='icon'><use xlink:href='images/symbols.svg#ok'></use></svg>" +
                            "'</a>" +
                            "'<a href='#'>" +
                            "'<svg class='icon'><use xlink:href='images/symbols.svg#instagram'></use></svg>" +
                                "'</a>" +
                                "'<a href='#'>" +
                                    "'<svg class='icon'><use xlink:href='images/symbols.svg#youtube'></use></svg>" +
                                "'</a>" +
                                "'<a href='#'>" +
                                    "'<svg class='icon'><use xlink:href='images/symbols.svg#twitter'></use></svg>" +
                                "'</a>" +
                                "'<a href='#'>" +
                                    "'<svg class='icon'><use xlink:href='images/symbols.svg#whatsapp'></use></svg>" +
                                "'</a>" +
                                "'<a href='#'>" +
                                    "'<svg class='icon'><use xlink:href='images/symbols.svg#viber'></use></svg>" +
                                "'</a>" +
                                "'<a href='#'>" +
                                    "'<svg class='icon'><use xlink:href='images/symbols.svg#telegram'></use></svg>" +
                                "'</a>" +
                                "'<a href='#'>" +
                                    "'<svg class='icon'><use xlink:href='images/symbols.svg#vk'></use></svg>" +
                                "'</a>" +
                            "'</div>" +
                        "'</div>" +
                        "'<div class='mb-text d-flex align-center justify-center'>" +
                            "'<span>Создание и продвижение сайтов - Praweb.ru</span>" +
                        "'</div>" +
                    "'</div>"
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
        //autoplay: true,
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

    $('.table__body-element .table__add-btn').click(function(e) {
        e.preventDefault();
        $(this).hide();
        $(this).parent().find('.table__values').show();
    });

    $('.table__body-element .table__values--plus').click(function(e) {
        e.preventDefault();
        var n = $(this).closest('.table__body-element').find('input');
        if (n.val() < 100) {
            n.val(parseInt(n.val()) + 1);
            $(this).closest('.table__body-element').find('.table__values b').html(n.val());
        }
    });
    $('.table__body-element .table__values--minus').click(function(e) {
        e.preventDefault();
        var n = $(this).closest('.table__body-element').find('input');
        n.val(parseInt(n.val()) - 1);
        $(this).closest('.table__body-element').find('.table__values b').html(n.val());
        if (n.val() < 1) {
            n.val(1);
            $(this).closest('.table__body-element').find('.table__values b').html(n.val());
            if ($(this).closest('.table__body-element').hasClass('table__body-element--more')) {
                $(this).closest('.table__body-element').find('.table__values').hide();
                $(this).closest('.table__body-element').find('.table__add-btn').show();
            }
        }
    });

    $(".tabs-content .tabs-content__tab").not(":first").hide();
    $(".tabs .tabs__tab").click(function () {
        if ($(this).hasClass('tabs__tab--active')) {

        } else {
            $(".tabs-content .tabs-content__tab").hide().eq($(this).index()).fadeIn(300);
        }
        $('.tabs .tabs__tab.tabs__tab--active').removeClass('tabs__tab--active');
        $(this).addClass('tabs__tab--active');
        return false;
    });

    $('.side-container__accordeon-item .side-container__accordeon-heading').click(function(e) {
        e.preventDefault();
        if ($(this).parent().hasClass('side-container__accordeon-item--opened')) {
            $(this).parent().removeClass('side-container__accordeon-item--opened').css({'max-height': '58px'});
        } else {
            $('.side-container__accordeon-item.side-container__accordeon-item--opened').removeClass('side-container__accordeon-item--opened').css({'max-height': '58px'});
            $(this).parent().addClass('side-container__accordeon-item--opened').css({'max-height': $(this).parent()[0].scrollHeight})
        }
    });

    $('.side-container__link-more').click(function(e) {
        e.preventDefault();
        if ($('.side-container__accordeon, .side-container__links').hasClass('side-container__accordeon--full')) {
            $('.side-container__accordeon, .side-container__links').removeClass('side-container__accordeon--full').css({'max-height': '200px'});
            $(this).html('Показать больше');
        } else {
            $('.side-container__accordeon, .side-container__links').addClass('side-container__accordeon--full').css({'max-height': $('.side-container__accordeon, .side-container__links')[0].scrollHeight});
            $(this).html('Скрыть');
        }
    });

    $(window).resize(function() {
        if (window.innerWidth > 895) {
            $('.side-container__link-more').html('Показать больше');
            $('.side-container__accordeon, .side-container__links').removeClass('side-container__accordeon--full').removeAttr('style');
        }
    });
    
    $('.select .select__input').click(function(e) {
        e.preventDefault();
        if ($(this).parent().hasClass('select--opened')) {
            $(this).parent().removeClass('select--opened');
            $(this).parent().find('.select__dropdown').hide();
        } else {
            $('.select.select--opened').removeClass('select--opened').find('.select__dropdown').hide();
            $(this).parent().addClass('select--opened');
            $(this).parent().find('.select__dropdown').show();
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select').removeClass('select--opened');
            $('.select__dropdown').hide();
        }
    });

    $('.select .select__dropdown a').click(function(e) {
        e.preventDefault();
        var inp = $(this).parent().parent().parent().find('input'),
            value = $(this).find('span').html();
        inp.val(value);
        $(this).parent().parent().parent().removeClass('select--opened');
        $(this).parent().parent().parent().find('.select__dropdown').hide();
    });

    $('.input-file').each(function() {
        var $input = $(this),
            $label = $input.next('.js-labelFile'),
            labelVal = $label.html();

        $input.on('change', function(element) {
            var fileName = '';
            if (element.target.value) fileName = element.target.value.split('\\').pop();
            fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
        });
    });

});