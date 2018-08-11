$(document).ready(function() {
    $(window).resize(function(){
    var windowWidth = $('body').innerWidth();
    if(windowWidth > 995)$("#nav-reg").addClass("my-navbar");
    else $("#nav-reg").removeClass("my-navbar");
    });
});

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        nav:true,
        navText:[
            '<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'
        ],
        pagination : true,
        loop:true,
        //autoplay: true, //Автозапуск слайдера
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 7000, //Время смены слайда
        itemElement:'div',
        //margin:10,

        dots: true, // навигационные точки
        margin:5,
        merge:true,
        responsiveClass: true,
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
            //function carouselService() {
            //    $('.item').each(function() {
            //        var t = $(this),
            //            h = t.find('.slider-info').outerHeight();
            //        t.find('.carousel-img').css('min-height', h);
            //    });
            //}carouselService();

