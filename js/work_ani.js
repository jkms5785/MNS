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

let StopRotate = false;

function RotateToRight() {
    mtos_cont.style.transition = "all 500ms ease-in"
    mtos_cont.style.transform = "rotateZ(18deg)";
    setTimeout(function () {
        if (!StopRotate) {
            RotateToLeft();
        }
    }, 2000);
}

function RotateToLeft() {
    mtos_cont.style.transform = "rotateZ(0deg)";
    setTimeout(function () {
        if (!StopRotate) {
            RotateToRight();
        }
    }, 2000);
}

function clickToCircle() {
    ToCircle[0].removeEventListener('click', clickToCircle);
    StopRotate = true;
    mtos_cont.style.transform = "rotateZ(0deg)";
    setTimeout(function () {
        AniQue2();
        Popball();
    }, 800);
}

function Popball() {
    setTimeout(function () {
        svgSlect.style.opacity = 0;
        svgSlect.style.cursor = "";
        svgSlect.style.zIndex = "-1";

        ToSquare[0].style.zIndex = "1";
        ToSquare[0].classList.add('Circle');
        ToSquare[0].classList.add('CirclePop');
        ToSquare[0].style.cursor = "pointer";
        let y = 0;
        let borderRadiusCircle = setInterval(function () {
            y++;
            ToSquare[0].style.borderRadius = y + '%';
            if (y === 100) {
                clearInterval(borderRadiusCircle);
            }
        }, 5);

        setTimeout(function () {
            ToSquare[0].addEventListener('click', clickToSquare);
        }, 1000);
    }, 1000);
}

function clickToSquare() {
    ToSquare[0].removeEventListener('click', clickToSquare);
    let TopPosition = parseInt(ToSquare[0].offsetTop / 2.2);
    // offsetTop 110 = top 50% // offsetWith = 140
    // Top position % 구하기.
    ToSquare[0].style.animationName = "no";
    // 애니메이션 정지
    ToSquare[0].style.top = TopPosition + '%';
    // 정지 후 현재위치 유지

    if (TopPosition > 50) {
        let t = 0;
        let backToOrigin = setInterval(function () {
            t++;
            ToSquare[0].style.top = TopPosition - t + '%';
            var StopQue = TopPosition - t;
            if (StopQue === 50 || StopQue <= 50) {
                clearInterval(backToOrigin);
                PopSquare();
            }
        }, 8);
    }
}

function PopSquare() {
    let j = 100;
    let borderRadiusCircle = setInterval(function () {
        j--;
        ToSquare[0].style.borderRadius = j + '%';
        if (j === 0) {
            clearInterval(borderRadiusCircle);
            backToSquare();
        }
    }, 5);
}

function backToSquare() {
    setTimeout(function () {
        svgSlect.style.opacity = "1";
        svgSlect.style.zIndex = "1";
        svgSlect.style.cursor = "pointer";
        AniQue();
        ToSquare[0].style.animationName = "";
        ToSquare[0].classList.remove('CirclePop');
        ToSquare[0].classList.remove('Circle');
        ToSquare[0].style.zIndex = "-1";
        ToSquare[0].style.cursor = "";

        setTimeout(function () {
            StopRotate = false;
            RotateToRight();
            ToCircle[0].addEventListener('click', clickToCircle);
        }, 1500);
    }, 500);
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

function init() {
    ToCircle[0].addEventListener('click', clickToCircle);
    svgSlect.setAttribute('viewbox', "0 0 220 220");
    svgSlect.style.cursor = "pointer";

    const checker = setInterval(function () {
        if (rotateQue.classList[1] === "workAni_loader") {
            RotateChecker = 0;
            clearInterval(checker);
            RotateToRight();
        }
    }, 1000);
}

init();