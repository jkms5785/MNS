 $(document).ready(function () {

     // after preloader //
     setTimeout(function () {
         /*home_body, work_arrow, about_intro_1 preloader animation*/
         var home_body = $('.home_body'),
             work_arrow = $('.main_arrow'),
             about_body_1 = $('.about_intro_1'),
             about_body_2 = $('.about_intro_2'),
             about_body_3 = $('.about_intro_3'),
             work_ani = $('.bubble'),
             clickText = $('.click_text'),
             about_photo = $('.about_photo');


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

         about_body_2.delay(550).queue(function () {
             $(this).removeClass('body_preloader');
             $(this).addClass('body_loader');
         });

         about_body_3.delay(600).queue(function () {
             $(this).removeClass('body_preloader');
             $(this).addClass('body_loader');
         });
         /*arrow preloader, work_body, about_intro animation*/

        //  }, 80);
     }, 1800);

 /* Arrow animation */
//  $('.home_arrow').hover(function () {
//      $(this).find('.icon_arrow *').css('animation-play-state', 'paused'),
//  },
//  function () {
//      $(this).find('.icon_arrow *').css('animation-play-state', ''),
//  }).click(function () {
//  $('html, body').animate({
//      scrollTop: $("#arrowScrollTo").offset().top
//  }, 700);
//  })
 /* Arrow animation */
 });
