const ClueParent = document.querySelector("body");
const clickClue = document.querySelector("#js-workAni");

let ClueX = clickClue.offsetLeft, // X
    ClueY = clickClue.offsetTop, // Y
    ClueWidth = clickClue.offsetWidth, // X + width
    ClueHeight = clickClue.offsetHeight; // Y + width

// 1. retina 확인 함수
const windowPixelScale = (c) => {
    if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            return window.devicePixelRatio; // retina
        }
    }
    return 1; // not retina = 1.0
}

// 2. canvas 만들기
let ClueCanvas = document.createElement("canvas");
ClueCanvas.id = "js-Clickclue";
ClueCanvas.style.position = "fixed";
ClueCanvas.style.top = "0";
ClueCanvas.style.left = "0";
ClueCanvas.style.webkitTransition = "all 500ms ease-out";
ClueCanvas.style.mozTransition = "all 500ms ease-out";
ClueCanvas.style.oTransition = "all 500ms ease-out";
ClueCanvas.style.transition = "all 500ms ease-out";
ClueCanvas.style.opacity = "0";
ClueParent.appendChild(ClueCanvas);

// 2-1. canvas.style 설정
ClueCanvas.style.width = "100%";
ClueCanvas.style.height = "100%";

// 2-2. Retina 적용
let ClueCanvasCtx = ClueCanvas.getContext("2d");
let ClueScaleFactor = windowPixelScale(c);

if (scaleFactor >= 1.1) {
    ClueCanvas.width = window.innerWidth * ClueScaleFactor;
    ClueCanvas.height = window.innerHeight * ClueScaleFactor;
    ClueCanvasCtx = ClueCanvas.getContext("2d");
    window.onresize = (e) => {
        e.preventDefault();
        ClueCanvas.width = window.innerWidth * ClueScaleFactor;
        ClueCanvas.height = window.innerHeight * ClueScaleFactor;
    }
} else {
    ClueCanvas.width = window.innerWidth;
    ClueCanvas.height = window.innerHeight;
    ClueCanvasCtx = canvas.getContext("2d");
    window.onresize = (e) => {
        e.preventDefault();
        ClueCanvas.width = window.innerWidth;
        ClueCanvas.height = window.innerHeight;
    }
}

// 4. remooveCanvas 함수
function removeCanvas() {
    // ClueCanvas.style.opacity = "0";
    setTimeout(function () {
        // ClueCanvas.style.zIndex = "-9999";
        ClueParent.style.overflow = ""; // body scroll 잠금 해제
    }, 500);
}

function ClickClueOpacity_1() {
    ClueCanvas.style.opacity = "1.0";

    setTimeout(() => {
        ClueCanvas.style.opacity = "0";
        ClueCanvas.style.zIndex = "-9999";
        scrollMove();
    }, 1200);
}

// 3. canavas 그리기
function makeClickClue() {
    let c = ClueCanvasCtx;
    let s = ClueScaleFactor;

    ClueX = Math.floor(clickClue.offsetLeft * s),
        ClueY = Math.floor(clickClue.offsetTop * s),
        ClueWidth = Math.floor(clickClue.offsetWidth * s),
        ClueHeight = Math.floor(clickClue.offsetHeight * s);

    // Rect 그리기
    let Cx = ClueX + ClueWidth / 2,
        Cy = ClueY + ClueHeight / 2,
        Cwidth = 220,
        Cmargin = 32;

    let X = Cx - (Cwidth / 2 + Cmargin) * s,
        Y = Cy - (Cwidth / 2 + Cmargin) * s,
        width = (Cwidth + Cmargin * 2) * s;

    c.fillStyle = 'rgba(0, 0, 0, 0.6)';
    c.fillRect(0, 0, window.innerWidth * s, window.innerHeight * s);
    c.clearRect(X, Y, width, width);


    // Click txt 그리기 
    let font = "700 32px Montserrat, 'san-selif'",
        message = "Click",
        fontX = X + width / 2,
        fontY = Y + width,
        fontMargin = 32 * s;

    c.fillStyle = "rgba(255, 255, 255, 1.0)";
    c.textAlign = "center";
    c.textBaseline = "Top";
    c.font = font;
    c.fillText(message, fontX, fontY + fontMargin);
}

// resize 좌표 유지
window.addEventListener("resize", makeClickClue);

// canvas 그리기
const preloader_Out = document.querySelector(`#js-preloader`);

function transitionedCheck(e) {
    if (e.target.style.transform == `translateY(200%)`) {
        preloader_Out.removeEventListener(`transitionend`, transitionedCheck);
        setTimeout(() => {
            makeClickClue();
            ClickClueOpacity_1();
        }, 1200);
    }
}

preloader_Out.addEventListener(`transitionend`, transitionedCheck);

function scrollFrozen() {
    ClueParent.style.height = "100%";
    ClueParent.style.minHeight = "100%";
    ClueParent.style.overflow = "hidden";
    ClueParent.style.touchAction = "none";
}

function scrollMove() {
    ClueParent.style.height = "";
    ClueParent.style.minHeight = "";
    ClueParent.style.overflow = "";
    ClueParent.style.touchAction = "";
}


function init() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
    scrollFrozen();
}

init();