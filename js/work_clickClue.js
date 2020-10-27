const ClueParent = document.querySelector("body");
const clickClue = document.querySelector("#js-workAni");

let ClueX = clickClue.offsetLeft, // X
    ClueY = clickClue.offsetTop, // Y
    ClueWidth = clickClue.offsetWidth, // X + width
    ClueHeight = clickClue.offsetHeight; // Y + width

// retina 확인 함수
const windowPixelScale = (c) => {
    if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            return window.devicePixelRatio; // retina
        }
    }
    return 1; // not retina = 1.0
}

// 0. 스크롤 고정
// TODO: ScrollPosition = 0 으로 만드는 함수
// ClueParent.style.overflow = "hidden"; // body scroll lock

// 1. canvas 만들기
let ClueCanvas = document.createElement("canvas");
ClueCanvas.id = "js-Clickclue";
ClueCanvas.style.position = "fixed";
ClueCanvas.style.top = "0";
ClueCanvas.style.left = "0";
ClueParent.appendChild(ClueCanvas); // body 에 canvas 추가

let ClueCanvasCtx = ClueCanvas.getContext("2d");

// 2-1. Retina display 확인 함수
let ClueScaleFactor = windowPixelScale(c);

// 2-2. canvas.style 설정
ClueCanvas.style.width = "100%";
ClueCanvas.style.height = "100%";

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

function makeClickClue() {
    // window.requestAnimationFrame(makeClickClue);

    let c = ClueCanvasCtx;
    let s = ClueScaleFactor;

    ClueX = Math.floor(clickClue.offsetLeft * s),
        ClueY = Math.floor(clickClue.offsetTop * s),
        ClueWidth = Math.floor(clickClue.offsetWidth * s),
        ClueHeight = Math.floor(clickClue.offsetHeight * s);

    let Cx = ClueX + ClueWidth / 2,
        Cy = ClueY + ClueHeight / 2,
        Cwidth = 220,
        Cmargin = 32;

    let X = Cx - (Cwidth / 2 + Cmargin) * s,
        Y = Cy - (Cwidth / 2 + Cmargin) * s,
        Width = (Cwidth + Cmargin * 2) * s;

    c.fillStyle = "rgba(0,0,0,0.6)";
    c.fillRect(0, 0, window.innerWidth * s, window.innerHeight * s);
    c.clearRect(X, Y, Width, Width);

    // TODO: txt Click ME 추가
    c.fillText('Hello world', 30, 30);
}

makeClickClue();

window.addEventListener("resize", makeClickClue);

// TODO: local storge 로 1회만 뜰 것.