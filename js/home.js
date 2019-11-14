 $(document).ready(function () {
     var preloader = $('.preloader');
     //preloader          
     var BluePreloader = function () {

        //  setTimeout(function () {
        //      preloader.animate({
        //          top: "200%"
        //      }, 2500);
             
        //      preloader.animate({
        //          top: "400%",
        //          height: 0
        //      }, 1500);
        //  }, 250);
     }


     BluePreloader();
     //preloader      

     // after preloader //
     setTimeout(function () {
         /*header preloader animation */
         var header = $('header');
         header.animate({
             top: 0,
             opacity: 1.0
         }, 500, 'easeInOutQuad');
         /*header preloader animation*/

         /*home_body, work_arrow, about_intro_1 preloader animation*/
         var home_body = $('.home_body'),
             work_arrow = $('.main_arrow'),
             about_body_1 = $('.about_intro_1'),
             about_body_2 = $('.about_intro_2'),
             about_body_3 = $('.about_intro_3'),
             work_ani = $('.bubble'),
             clickText = $('.click_text'),
             about_photo = $('.about_photo');

         home_body.delay(450).queue(function () {
             $(this).removeClass('body_preloader');
             $(this).addClass('body_loader');
         });

         work_arrow.delay(450).queue(function () {
             $(this).removeClass('arrow_preloader');
             $(this).addClass('arrow_loader');
         });

         about_body_1.delay(450).queue(function () {
             $(this).removeClass('body_preloader');
             $(this).addClass('body_loader');
         });

         work_ani.delay(1500).queue(function () {
             $(this).removeClass('click_preloader');
             $(this).addClass('click_loader');
         });

         clickText.delay(1550).queue(function () {
             $(this).removeClass('click_preloader');
             $(this).addClass('click_loader');
         });

         about_photo.delay(450).queue(function () {
             $(this).removeClass('photo_preloader');
             $(this).addClass('photo_loader');
         });

         /*home_body, work_arrow, about_intro_1 animation*/


         /*arrow preloader, work_body, about_intro animation*/
         var home_arrow = $('.home_arrow');

         home_arrow.delay(550).queue(function () {
             $(this).removeClass('arrow_preloader');
             $(this).addClass('arrow_loader');
         });

         about_body_2.delay(550).queue(function () {
             $(this).removeClass('body_preloader');
             $(this).addClass('body_loader');
         });

         about_body_3.delay(600).queue(function () {
             $(this).removeClass('body_preloader');
             $(this).addClass('body_loader');
         });
         /*arrow preloader, work_body, about_intro animation*/


         /* title loader */
         var materialAnd = $('.material span').length;
         var solution = $('.solution span').length;

         var title1 = $('.material span');
         var title2 = $('.solution span');

         var m = 0;

         var titleLoader1 = function () {
             for (m = 0; m < materialAnd; m++) {
                 (function (x) {
                     setTimeout(function () {
                         title1.eq(x).removeClass("title_preloader");
                         title1.eq(x).addClass("title_loader");
                     }, 10 * x, 'easeInOutQuad');
                 })(m);
             }
         }
         titleLoader1();

         setTimeout(function () {
             var titleLoader2 = function () {
                 for (m = 0; m < solution; m++) {

                     (function (x) {
                         setTimeout(function () {
                             title2.eq(x).removeClass("title_preloader");
                             title2.eq(x).addClass("title_loader");

                         }, 10 * x);
                     })(m);
                 }
             }
             titleLoader2();
             /* title loader */

         }, 80);


     }, 1800);
     // after preloader //

     // home_gif //
     setTimeout(function () {
         $('.home_gif_cont').prepend("<img id='home_gif' src= 'img/home_logo.gif'>");
    }, 2000);
 // home_gif //


 /* Arrow animation */
 $('.home_arrow').hover(function () {
     $(this).find('.icon_arrow *').css('animation-play-state', 'paused'),
         $(this).find('.icon_arrow *').css('fill', '#2F75FF'), $(this).find('.icon_arrow').addClass("arrowRotate_home"),
         $(this).find('.arrow_body').css('color', '#2F75FF'),
         $(this).find('.arrow_body').css('opacity', 1.0);
 },
 function () {
     $(this).find('.icon_arrow *').css('animation-play-state', ''),
         $(this).find('.icon_arrow *').css('fill', '#585858'),
         $(this).find('.icon_arrow').removeClass("arrowRotate_home"),
         $(this).find('.arrow_body').css('color', '#393939'),
         $(this).find('.arrow_body').css('opacity', 1.0);
 }).click(function () {
 //        console.log('10');
 $('html, body').animate({
     scrollTop: $("#arrowScrollTo").offset().top

 }, 700);
 })
 /* Arrow animation */
 });
