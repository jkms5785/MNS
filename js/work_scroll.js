var didScroll;
var PopUpBallQue;
var headerLife = document.getElementsByTagName('header');

function headerAni() {
    headerLife[0].classList.add('headerUp');
    headerLife[0].classList.remove('headerDown');
}

function headerAniStop() {
    headerLife[0].classList.remove('headerUp');
    headerLife[0].classList.add('headerDown');
}

var blueQue = document.getElementsByClassName('wrap_blue');

window.addEventListener('scroll', () => {
    var scrolled = window.scrollY;
    var scrollobject = document.getElementsByClassName('workAniUp'),
        k = 0,
        workNumber = scrollobject.length;

    for (k = 0; k < workNumber; k++) {
        var scrollQue = scrollobject[k].offsetTop - window.innerHeight;
      
        if((Math.ceil(scrolled) - 1024) + 600 >= (scrollobject[k].offsetTop + 120))
        {
            scrollobject[k].classList.remove('slideOrigin');
            scrollobject[k].classList.add('slideUp');
        }
    }

    var HeaderLogo = document.getElementsByClassName('logoAni'),
        HeaderColor = document.getElementById('headerColor');

    didScroll = true;
    if (didScroll) {
        headerAni();
        setTimeout(function () {
            didScroll = false;
        }, 750)
    }
    //header up down

    var messageObject = document.getElementsByClassName('message'),
        messageButton = document.getElementsByClassName('messagebutton'),
        blueQueTop = blueQue[0].offsetTop;

    for (k = 0; k < 2; k++) {
        if (scrolled > blueQueTop - window.innerHeight + 500) {
            messageObject[k].classList.remove('messageSlideDown');
            messageObject[k].classList.add('messageSlideUp');
        }
    }

    if (scrolled > blueQueTop - window.innerHeight + 600) {
        messageButton[0].classList.remove('messagePopDown');
        messageButton[0].classList.add('messagePopUp');
    }
    //meesage up
});

setInterval(function () {
    if (didScroll === false) {
        headerAniStop();
    }
}, 500);
