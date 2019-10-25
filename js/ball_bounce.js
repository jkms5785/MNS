var canvas = document.getElementById('canvas');
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = 790;

window.onresize = e => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
//    init2();
}

var generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random() * (max - min + 1) + min);
    return ranNum;
}

let ballsArr = [] //ball 을 담을 배열
var c = canvas.getContext("2d");
var ball;
var gravity = 0.8;
var friction = 0.8;
var bounce = 0.7;

function ballTank() {
    ballsArr = []
}

ballTank();

function init2() {
    for (let i = 0; i < 6; i++) {

        var radius =
            (Math.floor(Math.random() * 10) + 7) * 8,
            x, y,
            dx = (Math.random() - 0.5) * 50,
            dy = -22,
            color = 'rgba(47,117,255,' + generateRandom(3, 8) / 10 + ')'

        ballsArr.push(new Ball(x, y, dx, dy, radius, color))
    }
}

function animate() {
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    //Animationframe que 계속 랜더링..;
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
    var blueQue = document.getElementsByClassName('wrap_blue');
    var scrollanchor = window.scrollY,
        QueHeight = blueQue[0].offsetHeight,
        blueQueTop = blueQue[0].offsetTop;

    if (scrollanchor >= blueQueTop - window.innerHeight + 600) {
        init2();
        //        console.log(1);
        window.removeEventListener('scroll', PopupBall2);
    }
}

function BallPop() {

        var radius =
            (Math.floor(Math.random() * 10) + 7) * 8,
            x, y,
            dx = (Math.random() - 0.5) * 50,
            dy = -22,
            color = 'rgba(47,117,255,' + generateRandom(3, 8) / 10 + ')'

        ballsArr.push(new Ball(x, y, dx, dy, radius, color))
}
//
//var BallQue = document.getElementsByClassName('ballPop');



//BallQue[0].addEventListener('mouseover', BallPop);

window.addEventListener('scroll', PopupBall2);
