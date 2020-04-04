const svg_obj = document.querySelector("#js-svg"),
    ani_1 = document.querySelector("#js-ani_1"),
    ani_2 = document.querySelector("#js-ani_2"),
    ani_3 = document.querySelector("#js-ani_3"),
    ani_4 = document.querySelector("#js-ani_4"),
    ani_0 = document.querySelector("#js-ani_0");

const mtos = document.querySelector('#mtos');

const ToCir = document.querySelectorAll('.js-ToCir'),
    ToSqu = document.querySelectorAll('.js-ToSqu');

const ani_ToCir = [ani_1, ani_2, ani_3, ani_4],
    ani_ToSqu = [ani_3, ani_2, ani_1, ani_0];

const btn_start_mtos = document.querySelector("#js-btn_1"),
    btn_reset_mtos = document.querySelector("#js-btn_2");

function ToCirAni() {
    btn_start_mtos.removeEventListener('click', ToCirAni);
    btn_start_mtos.removeEventListener('mouseover', bnt_1_hover);
    btn_start_mtos.removeEventListener('mouseleave', bnt_1_unhover);
    btn_start_mtos.style.setProperty("cursor", "");
    btn_start_mtos.style.setProperty("background-color", "rgba(47, 117, 255, 1.0)");
    AniCir();
    CirPopAni();
}

function paused() {
    this.style.setProperty("cursor", "pointer");
    this.style.setProperty("background-color", "rgba(47, 117, 255, 0.2)");
    ToSqu[0].style.animationPlayState = "paused";
}

function running() {
    this.style.setProperty("background-color", "rgba(47, 117, 255, 0.1)");
    ToSqu[0].style.animationPlayState = "";
}

function CirPopAni() {
    setTimeout(function () {
        svg_obj.style.opacity = 0;
        svg_obj.style.cursor = "";
        svg_obj.style.zIndex = "-1";

        ToSqu[0].style.zIndex = "1";
        ToSqu[0].classList.add('Circle');
        ToSqu[0].classList.add('CirclePop');
        let y = 0;
        let borderRadiusCircle = setInterval(function () {
            y++;
            ToSqu[0].style.borderRadius = y + '%';
            if (y === 100) {
                clearInterval(borderRadiusCircle);
            }
        }, 5);

        setTimeout(function () {
            btn_reset_mtos.addEventListener('click', ToCirOrigin);
            btn_reset_mtos.addEventListener('mouseover', paused);
            btn_reset_mtos.addEventListener('mouseleave', running);

        }, 1000);
    }, 1000);
}

function ToCirOrigin() {
    btn_reset_mtos.style.setProperty("cursor", "");
    btn_reset_mtos.style.setProperty("background-color", "rgba(47, 117, 255, 0.1)");
    btn_reset_mtos.removeEventListener('click', ToCirOrigin);
    btn_reset_mtos.removeEventListener('mouseover', paused);
    btn_reset_mtos.removeEventListener('mouseleave', running);
    ToSqu[0].style.animationPlayState = "";
    let TopPosition = parseInt(ToSqu[0].offsetTop / 2.2);
    // offsetTop 110 = top 50% // offsetWith = 140
    // Top position % 구하기.
    ToSqu[0].style.animationName = "no";
    // 애니메이션 정지
    ToSqu[0].style.top = TopPosition + '%';
    // 정지 후 현재위치 유지

    if (TopPosition > 50) {
        let t = 0;
        let backToOrigin = setInterval(function () {
            t++;
            ToSqu[0].style.top = TopPosition - t + '%';
            var StopQue = TopPosition - t;
            if (StopQue === 50 || StopQue <= 50) {
                clearInterval(backToOrigin);
                SquPopAni();
            }
        }, 8);
    }
}

function SquPopAni() {
    let j = 100;
    let borderRadiusCircle = setInterval(function () {
        j--;
        ToSqu[0].style.borderRadius = j + '%';
        if (j === 0) {
            clearInterval(borderRadiusCircle);
            ToSquAni();
        }
    }, 5);
}

function ToSquAni() {
    setTimeout(function () {
        svg_obj.style.opacity = "1";
        svg_obj.style.zIndex = "1";
        AniSqu();
        ToSqu[0].style.animationName = "";
        ToSqu[0].classList.remove('CirclePop');
        ToSqu[0].classList.remove('Circle');
        ToSqu[0].style.zIndex = "-1";
        ToSqu[0].style.cursor = "";

        setTimeout(function () {
            btn_start_mtos.addEventListener('click', ToCirAni);
            btn_start_mtos.addEventListener('mouseover', bnt_1_hover);
            btn_start_mtos.addEventListener('mouseleave', bnt_1_unhover);
        }, 1500);
    }, 500);
}

function AniCir() {
    for (l = 0; l < 4; l++) {
        (function (t) {
            setTimeout(function () {
                ani_ToCir[t].beginElement();
            }, 150 * t);
        })(l);
    }
}

function AniSqu() {
    for (l = 0; l < 4; l++) {
        (function (t) {
            setTimeout(function () {
                ani_ToSqu[t].beginElement();
            }, 150 * t);
        })(l);
    }
}

function bnt_1_hover() {
    this.style.setProperty("background-color", "rgba(47, 117, 255, 0.8)");
    this.style.setProperty("cursor", "pointer");
}

function bnt_1_unhover() {
    this.style.setProperty("background-color", "rgba(47, 117, 255, 1.0)");
}

function init() {
    btn_start_mtos.addEventListener('click', ToCirAni);
    btn_start_mtos.addEventListener('mouseover', bnt_1_hover);
    btn_start_mtos.addEventListener('mouseleave', bnt_1_unhover);
    svg_obj.setAttribute('viewbox', "0 0 220 220");
}

init();