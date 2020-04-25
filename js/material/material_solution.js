const sol_canvas = document.querySelector("#js-solution"),
    sol_canvas_cont = document.querySelector("#js-solution-cont");

const backScale = (context) => {
    if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            // retina display
            return window.devicePixelRatio;
        }
    }
    return 1;
}

sol_canvas.style.width = "100%";
sol_canvas.style.height = "100%";

let sol_ctx = sol_canvas.getContext("2d");
let sol_scaleFactor = backScale(sol_ctx);

if (sol_scaleFactor > 1) {
    sol_canvas.width = sol_canvas_cont.clientWidth * sol_scaleFactor;
    sol_canvas.height = sol_canvas_cont.clientHeight * sol_scaleFactor;

    sol_ctx = sol_canvas.getContext("2d");

    window.onresize = (e) => {
        e.preventDefault();
        sol_canvas.width = sol_canvas_cont.clientWidth * sol_scaleFactor;
        sol_canvas.height = sol_canvas_cont.clientHeight * sol_scaleFactor;
    }

} else {
    sol_canvas.width = sol_canvas_cont.clientWidth
    sol_canvas.height = sol_canvas_cont.clientHeight;

    sol_ctx = sol_canvas.getContext("2d");

    window.onresize = (e) => {
        e.preventDefault();
        sol_canvas.width = sol_canvas_cont.clientWidth
        sol_canvas.height = sol_canvas_cont.clientHeight;
    }
}

let bArr = [];
let sol_b;
const grv = 1.6;
const fric = 0.8;
const bnc = 0.4;
const bWidth = 16;

const makeRanNum = (min, max) => {
    let Num = Math.floor(Math.random() * (max - min + 1) + min);
    return Num;
}

const bAniQue = () => {
    window.requestAnimationFrame(bAniQue);
    // animation 60fps que
    sol_ctx.clearRect(0, 0, sol_canvas.width, sol_canvas.height);
    // canvas redraw
    for (let i = 0; i < bArr.length; i++) {
        bArr[i].update()
    }
    // ball arry 에 push된 공 만큼 draw
}

bAniQue();

class bObj {
    constructor(x, y, dx, dy, radius, color, stroke) {
        this._x = sol_canvas.width / 2;
        this._y = sol_canvas.height / 2;
        this._dx = dx;
        this._dy = dy;
        this._radius = radius;
        this._color = color;
    }

    draw() {
        sol_ctx.beginPath()
        sol_ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2)
        sol_ctx.fillStyle = this._color
        sol_ctx.fill()
        sol_ctx.closePath()
    }

    update() {
        if (this._y + this._radius + this._dy > sol_canvas.height) {
            this._dy = -this._dy * fric
            this._dx = this._dx * fric
        } else {
            this._dy += grv // y가속 * 중력
            this._radius = this._radius
        }

        if (this._x + this._radius > sol_canvas.width || this._x - this._radius < 0) {
            this._dx = -this._dx
        }

        if (this._dy < 0.5 && this._dy > -5.5) {
            this._dy = 0; // y가속이 0.5 ~ -5.5  사이면 가속 = 0
        }

        if (Math.abs(this._dx) < 2.1) {
            this._dx = 0; // x가속 2.1 보다작으면 0 
        }
        this._y += this._dy // y 좌표에 가속을 더하라, 가속 = dy * gravity
        this._x += this._dx // x 좌표에 가속을 더하라, 가속 = dx
        this.draw();
    }
}

const drawB = () => {
    for (let i = 0; i < 7; i++) {
        let radius = (Math.floor(makeRanNum(5, 6) * bWidth) * 2);
        let x, y;
        let dx = Math.floor(makeRanNum(-8, 8) * 3);
        let dy = -22;
        let color = `rgba(47,117,255,${makeRanNum(6, 9)/10})`;
        bArr.push(new bObj(x, y, dx, dy, radius, color));
    }
}

const delB = () => {
    bArr = [];
}

let bCheck = true;

const pushB = () => {
    const Y = window.scrollY;
    if (Y > sol_canvas_cont.offsetTop && Y < sol_canvas_cont.offsetTop + sol_canvas_cont.offsetHeight) {
        if (bCheck == true) {
            bCheck = false;
            drawB();
        }
    } else {
        if (bCheck == false) {
            bCheck = true;
            delB();
        }
    }
}
window.addEventListener(`scroll`, pushB);