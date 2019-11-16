const svgSlect = document.getElementById("js-svgAni"),
    animation1 = document.getElementById("js-animation_1"),
    animation2 = document.getElementById("js-animation_2"),
    animation3 = document.getElementById("js-animation_3"),
    animation4 = document.getElementById("js-animation_4"),
    animation0 = document.getElementById("js-animation_0");

const mtos_cont = document.getElementById('mtos_cont');

const ToCircle = document.getElementsByClassName('js-ToCircle'),
    ToSquare = document.getElementsByClassName('js-ToSquare');

const aniArry = [animation1, animation2, animation3, animation4],
    aniArryRev = [animation3, animation2, animation1, animation0];

const rotateQue = document.querySelector("#js-workAni");

let count = 0;
let Rv = 0;
let RotateChecker = 3;

function Rotater() {
    if (RotateChecker == 0) {
        let tiltRight = setInterval(function () {
            Rv++;
            mtos_cont.style.transform = 'rotateZ(' + Rv + 'deg)';
            if (Rv >= 18) {
                clearInterval(tiltRight);
                RotateChecker = 1;
            } else if (RotateChecker === 3) {
                clearInterval(tiltRight);
            }
        }, 15);
    }

    if (RotateChecker == 1) {
        let tiltLeft = setInterval(function () {
            Rv--;
            mtos_cont.style.transform = 'rotateZ(' + Rv + 'deg)';
            if (Rv <= 0) {
                clearInterval(tiltLeft);
                RotateChecker = 0;
            } else if (RotateChecker === 3) {
                clearInterval(tiltLeft);
            }
        }, 30);
    }
}
// 오른쪽, 왼쪽으로 기울기

let overclickStop = true;

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
                AniQue();
                ToSquare[0].classList.remove('CirclePop');
                ToSquare[0].style.cursor = "";
                svgSlect.style.opacity = 1.0;
                svgSlect.style.cursor = "pointer";
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
    }
}

function AniQue2() {
    for (l = 0; l < 4; l++) {
        (function (t) {
            setTimeout(function () {
                aniArry[t].beginElement();
            }, 150 * t);
        })(l);
    }
}

function AniQue() {
    for (l = 0; l < 4; l++) {
        (function (t) {
            setTimeout(function () {
                aniArryRev[t].beginElement();
            }, 150 * t);
        })(l);
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
        } else {
            mtos_cont.style.transform = 'rotateZ(0deg)';
            clearInterval(RotateToOrigin);
        }
        // rotate Interval 끝내고, 원래 Z축으로 돌아가기 

        setTimeout(function () {
            AniQue2();
        }, 500)
        // 줄어드는 애니메이션 배열 시작 For, 클로저

        if (count === 0) {
            setTimeout(function () {
                svgSlect.style.opacity = 0;
                svgSlect.style.cursor = "";
                ToSquare[0].classList.add('CirclePop');
                ToSquare[0].style.cursor = "pointer";
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
    } 
}

function init() {
    ToCircle[0].addEventListener('click', clickToCircle);
    ToSquare[0].addEventListener('click', clickToSquare);

    svgSlect.setAttribute('viewbox', "0 0 220 220");
    svgSlect.style.cursor = "pointer";

    const checker = setInterval(function () {
        if (rotateQue.classList[1] === "workAni_loader") {
            RotateChecker = 0;
            clearInterval(checker); 
            let RotateToRight = setInterval(Rotater, 2000);
        }
    }, 1000);
}

init();