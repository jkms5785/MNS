const ClueParent = document.querySelector("body");
const clickClue = document.querySelector("#js-workAni");

const ClueX = clickClue.offsetLeft,
    ClueY = clickClue.offsetTop,
    ClueWidth = clickClue.offsetWidth,
    ClueHeight = clickClue.offsetHeight;

function init() {
    console.dir(clickClue);
    console.log(ClueX, ClueY, ClueX + ClueWidth, ClueY + ClueHeight);
    let ClueCanvas = document.createElement("canvas");
    ClueCanvas.id = "js-Clickclue";
    ClueCanvas.style.position = "fixed";
    ClueCanvas.style.top = "0";
    ClueCanvas.style.left = "0";
    ClueParent.appendChild(ClueCanvas);

    const bckScale = (context) => {
        if ('devicePixelRatio' in window) {
            if (window.devicePixelRatio > 1) {
                // retina display
                return window.devicePixelRatio;
            }
        }
        return 1;
    }

    let c = ClueCanvas.getContext("2d");
    let scaleFactor = bckScale(c);

    ClueCanvas.style.width = "100%";
    ClueCanvas.style.height = "100%";

    if (scaleFactor > 1) {
        ClueCanvas.width = window.innerWidth * scaleFactor;
        ClueCanvas.height = window.innerHeight * scaleFactor;

        c = ClueCanvas.getContext("2d");

        window.onresize = (e) => {
            e.preventDefault();
            ClueCanvas.width = window.innerWidth * scaleFactor;
            ClueCanvas.height = window.innerHeight * scaleFactor;
        }

    } else {
        ClueCanvas.width = window.innerWidth;
        ClueCanvas.height = window.innerHeight;
        c = canvas.getContext("2d");

        window.onresize = (e) => {
            e.preventDefault();
            ClueCanvas.width = window.innerWidth;
            ClueCanvas.height = window.innerHeight;
        }
    }

    c.globalAlpha = 0.38;
    c.fillRect(0, 0, ClueCanvas.width, ClueCanvas.height);
    c.clearRect(ClueX, ClueY, ClueX + ClueWidth, ClueY + ClueHeight);
}

function makeClue() {
    const canvas = document.querySelector("js-Clickclue");
    console.log(canvas);

}

init();