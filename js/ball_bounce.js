var canvas = document.getElementById('canvas'),
    canvas_wrap = document.querySelectorAll(".js-canvas_wrap");

const bckScale = (context) => {
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

var c = canvas.getContext("2d");
var scaleFactor = bckScale(c);

if (scaleFactor > 1) {
    canvas.width = canvas_wrap[0].clientWidth * scaleFactor;
    canvas.height = canvas_wrap[0].clientHeight * scaleFactor;

    c = canvas.getContext("2d");

    window.onresize = (e) => {
        e.preventDefault();
        canvas.width = canvas_wrap[0].clientWidth * scaleFactor;
        canvas.height = canvas_wrap[0].clientHeight * scaleFactor;
    }

} else {
    canvas.width = canvas_wrap[0].clientWidth;
    canvas.height = canvas_wrap[0].clientHeight;

    c = canvas.getContext("2d");

    window.onresize = (e) => {
        e.preventDefault();
        canvas.width = canvas_wrap[0].clientWidth;
        canvas.height = canvas_wrap[0].clientHeight;
    }
}


var generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNum;
}

let ballsArr = []
var ball;
var gravity = 1.5;
var friction = 0.8;
var bounce = 0.8;
let ballWidth = 32;

function ballTank() {
    ballsArr = []
}

ballTank();

function init2() {
    console.log(canvas.width);
    if (canvas.width < 1200) {
        ballWidth = 24;
    }
    for (let i = 0; i < 6; i++) {
        var radius =
            (Math.floor(generateRandom(3, 5) * ballWidth) + 5) * 2,
            x, y,
            dx = (Math.random() - 0.5) * 50,
            dy = -28,
            color = 'rgba(47,117,255,' + generateRandom(4, 9) / 10 + ')'

        ballsArr.push(new Ball(x, y, dx, dy, radius, color))
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < ballsArr.length; i++) {
        ballsArr[i].update()
    }
}

animate();

class Ball {
    constructor(x, y, dx, dy, radius, color, stroke) {
        this._x = canvas.width / 2
        this._y = canvas.height / 2
        this._dx = dx
        this._dy = dy
        this._radius = radius
        this._color = color
    }

    draw() {
        c.beginPath()
        c.arc(this._x, this._y, this._radius, 0, Math.PI * 2)
        c.fillStyle = this._color
        c.fill()
        c.closePath()
    }

    update() {
        if (this._y + this._radius + this._dy > canvas.height) {
            this._dy = -this._dy * friction
            this._dx = this._dx * friction

        } else {
            this._dy += gravity
            this._radius = this._radius

        }
        if (this._x + this._radius > canvas.width || this._x - this._radius < 0) this._dx = -this._dx
        if (this._dy < 0.5 && this._dy > -5.5)
            this._dy = 0;
        if (Math.abs(this._dx) < 2.1)
            this._dx = 0;

        this._y += this._dy
        this._x += this._dx
        this.draw()
    }
}

function PopupBall2() {
    var blueQue = document.querySelector('#js-message');
    var scrollanchor = window.scrollY,
        blueQueTop = blueQue.offsetTop;

    if (scrollanchor >= blueQueTop - window.innerHeight + 600) {
        init2();
        window.removeEventListener('scroll', PopupBall2);
    }
}

function init() {
    window.addEventListener('scroll', PopupBall2);
}

init();