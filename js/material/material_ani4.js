const canvas = document.querySelector("#js-canvas"),
    canvas_cont = document.querySelector("#js-canvas_cont");

const btn_start_popBall = document.querySelector("#js-btn_6"),
    btn_reset_popBall = document.querySelector("#js-btn_7");

const backingScale = (context) => {
    if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
            // retina display
            return window.devicePixelRatio;
        }
    }
    return 1;
}

canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.backgroundColor = "#F3F3F3";

let ctx = canvas.getContext("2d");
let scaleFactor = backingScale(ctx);

if (scaleFactor > 1) {
    canvas.width = canvas_cont.clientWidth * scaleFactor;
    canvas.height = canvas_cont.clientHeight * scaleFactor;

    ctx = canvas.getContext("2d");

    window.onresize = (e) => {
        e.preventDefault();
        canvas.width = canvas_cont.clientWidth * scaleFactor;
        canvas.height = canvas_cont.clientHeight * scaleFactor;
    }

} else {
    canvas.width = canvas_cont.clientWidth
    canvas.height = canvas_cont.clientHeight;

    ctx = canvas.getContext("2d");

    window.onresize = (e) => {
        e.preventDefault();
        canvas.width = canvas_cont.clientWidth
        canvas.height = canvas_cont.clientHeight;
    }
}

let ballsArr = [];
let ball;
const gravity = 1.5;
const friction = 0.8;
const bounce = 0.6;
const ballWidth = 8;

const ranNum = (min, max) => {
    let Num = Math.floor(Math.random() * (max - min + 1) + min);
    return Num;
}

const ballAniQue = () => {
    window.requestAnimationFrame(ballAniQue);
    // animation 60fps que
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // canvas redraw
    for (let i = 0; i < ballsArr.length; i++) {
        ballsArr[i].update()
    }
    // ball arry 에 push된 공 만큼 draw
}

ballAniQue();

class ballObj {
    constructor(x, y, dx, dy, radius, color, stroke) {
        this._x = canvas.width / 2;
        this._y = canvas.height / 2;
        this._dx = dx;
        this._dy = dy;
        this._radius = radius;
        this._color = color;
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2)
        ctx.fillStyle = this._color
        ctx.fill()
        ctx.closePath()
    }

    update() {
        if (this._y + this._radius + this._dy > canvas.height) {
            this._dy = -this._dy * friction
            this._dx = this._dx * friction
        } else {
            this._dy += gravity
            this._radius = this._radius
        }
        if (this._x + this._radius > canvas.width || this._x - this._radius < 0) {
            this._dx = -this._dx
        }
        if (this._dy < 0.5 && this._dy > -5.5) {
            this._dy = 0;
        }
        if (Math.abs(this._dx) < 2.1) {
            this._dx = 0;
        }
        this._y += this._dy
        this._x += this._dx
        this.draw()
    }
}

const drawBall = () => {
    let radius = (Math.floor(ranNum(4, 8) * ballWidth) * 2);
    let x, y;
    let dx = Math.floor(Math.random() * 10);
    let dy = -22;
    let color = `rgba(47,117,255,${ranNum(4, 9)/10})`;
    ballsArr.push(new ballObj(x, y, dx, dy, radius, color));
}

const pushBall = () => {
    drawBall();
}

const delBall = () => {
    let ballsArr_2 = ballsArr.slice(0, ballsArr.length - 1);
    ballsArr = ballsArr_2;
}

function popBallHover() {
    this.style.setProperty("cursor", "pointer");
    if (this == btn_start_popBall) {
        this.style.setProperty("background-color", "rgba(47, 117, 255, 0.8)");
    } else {
        this.style.setProperty("background-color", "rgba(47, 117, 255, 0.2)");
    }
}

function popBallUnhover() {
    this.style.setProperty("cursor", "pointer");
    if (this == btn_start_popBall) {
        this.style.setProperty("background-color", "rgba(47, 117, 255, 1.0)");
    } else {
        this.style.setProperty("background-color", "rgba(47, 117, 255, 0.1)");
    }
}

btn_start_popBall.addEventListener("click", pushBall);
btn_start_popBall.addEventListener("mouseover", popBallHover);
btn_start_popBall.addEventListener("mouseleave", popBallUnhover);

btn_reset_popBall.addEventListener("click", delBall);
btn_reset_popBall.addEventListener("mouseover", popBallHover);
btn_reset_popBall.addEventListener("mouseleave", popBallUnhover);