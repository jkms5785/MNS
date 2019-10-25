 window.onload = function () {

     var ResumeTitle = $('.resume_title'),
         ResumeBody = $('.resume_body'),
         ResumeLine = $('.resume_Line'),
         ResumeNum = $('.resume_num');

     var hoverCounter = 0;

     function ResumeHover() {
         if (hoverCounter == 0) {
             hoverCounter = 3;

             var o = ResumeTitle.index(this),
                 ResumeBodyChild = ResumeBody.eq(o),
                 childLength = ResumeBodyChild.find('.ResumeQue').length;

             var t = 0;
             for (t = 0; t < childLength; t++) {
                 (function (x) {
                     setTimeout(function () {
                         ResumeBodyChild.find('.ResumeQue ').eq(x).addClass('ResumeSlideUp');
                         ResumeBodyChild.find('.ResumeQue ').eq(x).removeClass('ResumeSlideDown');
                     }, 20 * x, 'easeInOutQuad');
                 })(t);
             }
             ResumeLine.eq(o).stop().animate({
                 width: "100%"
             }, 850, "easeOutQuad");

             ResumeNum.eq(o).removeClass('resume_num');
             ResumeNum.eq(o).addClass('resume_numUp');

             setTimeout(function () {
                 hoverCounter = 1;
             }, 500)
         }
     }

     function ResumeHoverOut() {

         if (hoverCounter == 1) {

             var o = $('.resume_title').index(this);
             //                    console.log(o);
             var ResumeBodyChild = ResumeBody.eq(o);

             ResumeLine.eq(o).stop().animate({
                 width: "0%"
             }, 850, "easeOutQuad");

             $('.ResumeQue').removeClass('ResumeSlideUp');
             $('.ResumeQue').addClass('ResumeSlideDown');

             ResumeNum.eq(o).addClass('resume_num');
             ResumeNum.eq(o).removeClass('resume_numUp');

             setTimeout(function () {
                 hoverCounter = 0;
             }, 500)
         }

     }

     ResumeTitle.hover(ResumeHover, ResumeHoverOut);

 }
