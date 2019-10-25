   var svgSlect = document.getElementById('svgAni'),
       animation1 = document.getElementById("animation_1"),
       animation2 = document.getElementById("animation_2"),
       animation3 = document.getElementById("animation_3"),
       animation4 = document.getElementById("animation_4"),
       animation0 = document.getElementById("animation_0");

   var mtos_cont = document.getElementById('mtos_cont');

   var ToCircle = document.getElementsByClassName('ToCircle');

   var aniArry = [animation1, animation2, animation3, animation4];
   //줄어드는 애니메이션 배열

   var aniArryRev = [animation3, animation2, animation1, animation0];
   //커지는 애니메이션 배열

   svgSlect.setAttribute('viewbox', "0 0 220 220");

   var ToSquare = document.getElementsByClassName('ToSquare');

   var count = 0;
   // Onclick 구분 카운트 

   var Rv = 0;
      var RotateChecker = 3;

    setTimeout(function(){
        RotateChecker = 0;
    },2500)

   var Rotater1 = function () {
       if (RotateChecker == 0) {
           var Rotater1 = setInterval(function () {
               Rv++;
               mtos_cont.style.transform = 'rotateZ(' + Rv + 'deg)';
               //                   console.log(Rv);
               if (Rv >= 18) {
                   clearInterval(Rotater1);
                   RotateChecker = 1;
                   //                       console.log(RotateChecker);
               } else if (RotateChecker === 3) {
                   clearInterval(Rotater1);
               }
           }, 10);
       }

       if (RotateChecker == 1) {
           var Rotater2 = setInterval(function () {
               Rv--;
               //               console.log(Rv);
               mtos_cont.style.transform = 'rotateZ(' + Rv + 'deg)';
               //               console.log(Rv);
               if (Rv <= 0) {
                   clearInterval(Rotater2);
                   RotateChecker = 0;
                   //                   console.log(RotateChecker);
               } else if (RotateChecker === 3) {
                   clearInterval(Rotater2);
               }
           }, 30);
       }
   }
   // 오른쪽, 왼쪽으로 기울기

   var RotateToRight = setInterval(Rotater1, 1800);

   // 로테이트 인터벌 = if 문 합의 총 시간이 인터벌 숫자보다 작아야함

   var overclickStop = true;

   function clickToSquare() {
       RotateChecker = 3;

       if (overclickStop) {
           overclickStop = !overclickStop;

           if (count === 1) {
               var SquareTop = ToSquare[0].offsetTop;
               var OffsetSquare = mtos_cont.offsetWidth;
               var TopPosition = parseInt(SquareTop / OffsetSquare * 100);
               // Top position % 구하기. 
               ToSquare[0].style.animationName = 'no';
               ToSquare[0].style.top = TopPosition + '%';

               if (TopPosition > 50) {
                   var t = 0;
                   var Toptimer = setInterval(function () {
                       t++;
                       ToSquare[0].style.top = TopPosition - t + '%';
                       var StopQue = TopPosition - t;
                       if (StopQue === 50) {
                           clearInterval(Toptimer);
                       }
                   }, 8);
               }
               // 공이 아래로 튈때 ToSquare 제자리로 ~ 

               setTimeout(function () {
                   var y = 100;
                   var timer = setInterval(function () {
                       y--;
                       ToSquare[0].style.borderRadius = y + '%';
                       if (y === 0) {
                           clearInterval(timer);
                       }
                   }, 5);
               }, 500);

               setTimeout(function () {
                   // ToSquare 라운딩 각지게 
                   svgSlect.style.opacity = 1;
                   var AniQue = function () {
                       for (l = 0; l < 4; l++) {
                           (function (t) {
                               setTimeout(function () {
                                   aniArryRev[t].beginElement();
                               }, 150 * t);
                           })(l);
                       }
                   }
                   AniQue();
                   ToSquare[0].classList.remove('CirclePop');
                   svgSlect.style.opacity = 1.0;
               }, 1500);
               // 1.5초 뒤에 ToSquare 사라지고, svg다시등장 라운딩 각지게 
               setTimeout(function () {
                   RotateChecker = 0;
                   overclickStop = true;
                   // 중복방지
               }, 2500);
               count--;
               //카운트 0 으로 
           }
       } else {
           //           console.log("중복됨2");
       }
   }

   function clickToCircle() {
       RotateChecker = 3;

       if (overclickStop) {
           overclickStop = !overclickStop;

           if (Rv > 0) {
               var RotateToOrigin = setInterval(function () {
                   Rv--;
                   mtos_cont.style.transform = 'rotateZ(' + Rv + 'deg)';
                   if (Rv == 0) {
                       clearInterval(RotateToOrigin);
                   } 
               }, 25);
           }else {
                       mtos_cont.style.transform = 'rotateZ(0deg)';
                       clearInterval(RotateToOrigin);
                   }
           // rotate Interval 끝내고, 원래 Z축으로 돌아가기 

           setTimeout(function () {
               var AniQue = function () {
                   for (l = 0; l < 4; l++) {
                       (function (t) {
                           setTimeout(function () {
                               aniArry[t].beginElement();
                           }, 150 * t);
                       })(l);
                   }
               }
               AniQue();
           }, 500)
           // 줄어드는 애니메이션 배열 시작 For, 클로저

           if (count === 0) {
               setTimeout(function () {
                   svgSlect.style.opacity = 0;
                   ToSquare[0].classList.add('CirclePop');
                   var y = 0;
                   var timer = setInterval(function () {
                       y++;
                       ToSquare[0].style.borderRadius =
                           y + '%';
                       if (y === 100) {
                           clearInterval(timer);
                       }
                   }, 5);
                   ToSquare[0].style.animation = ("animation-play-state", "");
                   // 애니메이션 스테이트 멈춤 -> 실행, onclick 3회 이상일때 누적 방지
               }, 1500)
               count++;
           }

           setTimeout(function () {
               overclickStop = true;
               //                 // 중복방지
           }, 3000)
       } else {
           //           console.log("중복됨");
       }
   }

   ToCircle[0].addEventListener('click', clickToCircle);
   ToSquare[0].addEventListener('click', clickToSquare);
