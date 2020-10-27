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
// ClueCanvas.style.opacity = "0";
ClueParent.appendChild(ClueCanvas);

// 2-1. canvas.style 설정
ClueCanvas.style.width = "100%";
ClueCanvas.style.height = "100%";

// 2-2. Retina 적용
let ClueCanvasCtx = ClueCanvas.getContext("2d");
let ClueScaleFactor = windowPixelScale(c);

if (scaleFactor > 1) {
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

let opacity = {
    value: 0,
    ve: 1
}

// 3. canavas 그리기
function makeClickClue() {
    let animate = window.requestAnimationFrame(makeClickClue);
    // ClueCanvas.style.opacity = "1.0";

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

    opacity.value += opacity.ve;
    // console.log(`rgba(0, 0, 0, 0.${opacity.value < 10 ? `0${opacity.value}` : opacity.value})`);
    // console.log(opacity.value);
    // c.fillStyle = `rgba(0, 0, 0, 0.${opacity.value < 10 ? `0${opacity.value}` : opacity.value})`;
    c.fillStyle = 'rgba(0, 0, 0, 0.6)';
    c.fillRect(0, 0, window.innerWidth * s, window.innerHeight * s);
    c.clearRect(X, Y, width, width);


    // Click 그리기 
    let font = "700 32px Montserrat, 'san-selif'",
        message = "Click",
        fontX = X + width / 2,
        fontY = Y + width,
        fontMargin = 32 * s;

    // c.fillStyle = "rgba(255, 255, 255, 1.0)";
    c.textAlign = "center";
    c.textBaseline = "Top";
    c.font = font;
    c.fillText(message, fontX, fontY + fontMargin);

    // Canvas 사라지기

    if (opacity.value == 60) {
        window.cancelAnimationFrame(animate);
        setTimeout(() => {
            removeCanvas();
        }, 1500);
    }
}


// 0. 스크롤 고정 및 시작
function init() {
    ClueParent.style.overflow = "hidden"
    window.scroll({
        top: 0,
        behavior: "smooth"
    });

    let preloader = document.querySelector(".preloader");
    let ClueCheckInterval = setInterval(() => {
        if (preloader.classList.contains('js-clickClue')) {

            clearInterval(ClueCheckInterval);
            setTimeout(() => {
                makeClickClue();
            }, 1000);
        }
    }, 1000);
}

init();

// window.addEventListener("resize", resizeCanvas);

// TODO: local storge 로 1회만 뜰 것.


// window.addEventListener("scroll", function(){
//     console.log(window.scrollY);
// })

// window.onload = function(){
//     setTimeout(() => {
//         window.scrollTo(0,0);
//         console.log('1221242114142124');
//     }, 100);
// }