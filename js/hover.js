$(document).ready(function () {

    $('.underline').hover(function () {
            $(this).addClass("underlineHovered");
        },
        function () {
            $(this).removeClass("underlineHovered");
        });

    var arrowLine = $('#arrow_line');
    //    console.log(arrowLine);

    $('.main_arrow').hover(function () {
            $(this).find('.icon_arrow *').css('animation-play-state', 'paused'),
                $(this).find('.icon_arrow *').css('fill', '#2F75FF'), $(this).find('.icon_arrow').addClass("arrowRotate"),
                $(this).find('.arrow_body').css('color', '#2F75FF'),
                $(this).find('.arrow_body').css('opacity', 1.0);
        },
        function () {
            $(this).find('.icon_arrow *').css('animation-play-state', ''),
                $(this).find('.icon_arrow *').css('fill', '#393939'),
                $(this).find('.icon_arrow').removeClass("arrowRotate"),
                $(this).find('.arrow_body').css('color', '#000000'),
                $(this).find('.arrow_body').css('opacity', 0.87);
        }).click(function () {

        $('html, body').animate({
            scrollTop: $("#arrowScrollTo").offset().top
        }, 850, 'easeInOutQuad');

    });

    $('.sub_button').hover(function () {
            $(this).addClass("messageHovered");
        },
        function () {
            $(this).removeClass("messageHovered");
        });

    //Shoot me a message//


});
