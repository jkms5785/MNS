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
        //        console.log('10');

        $('html, body').animate({
            scrollTop: $("#arrowScrollTo").offset().top
        }, 850, 'easeInOutQuad');

    });

    // arrow animation-play-state:paused;


    var work_hover = $('.work_hover_1');
    work_hover.hover(function () {
            $(this).addClass("imgHovered"),
                $(this).find('img').css('opacity', 0.8),
                $(this).find('.work_titlebody').addClass("textHovered"), $(this).find('.work_viewproject').addClass("viewProjectHovered"), $(this).find('.work_titlebody_w').addClass("textHovered"), $(this).find('.work_viewproject_w').addClass("viewProjectHovered");
        },
        function () {

            $(this).removeClass("imgHovered"),

                $(this).find('img').css('opacity', 1), $(this).find('.work_titlebody').removeClass("textHovered"), $(this).find('.work_viewproject').removeClass("viewProjectHovered"),
                $(this).find('.work_titlebody_w').removeClass("textHovered"), $(this).find('.work_viewproject_w').removeClass("viewProjectHovered");

        });

    var work_hover_2 = $('.work_hover_2');
    work_hover_2.hover(function () {
            $(this).addClass("imgHovered"),
                $(this).find('img').attr("src", "img/work_latup_m.gif"), $(this).find('.work_titlebody').addClass("textHovered"), $(this).find('.work_viewproject').addClass("viewProjectHovered"), $(this).find('.work_titlebody_w').addClass("textHovered"), $(this).find('.work_viewproject_w').addClass("viewProjectHovered");
        },
        function () {

            $(this).removeClass("imgHovered"),
                  $(this).find('img').attr("src", "img/work_latup.png"), $(this).find('.work_titlebody').removeClass("textHovered"), $(this).find('.work_viewproject').removeClass("viewProjectHovered"),
                $(this).find('.work_titlebody_w').removeClass("textHovered"), $(this).find('.work_viewproject_w').removeClass("viewProjectHovered");

        });

    // work_n //


    $('.sub_button').hover(function () {
            $(this).addClass("messageHovered");
        },
        function () {
            $(this).removeClass("messageHovered");
        });

    //Shoot me a message//


});
