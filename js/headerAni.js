let didScroll;
const headerLife = document.getElementsByTagName('header');

function headerUp() {
    headerLife[0].classList.add('headerUp');
    headerLife[0].classList.remove('headerDown');
}

function headerDown() {
    headerLife[0].classList.remove('headerUp');
    headerLife[0].classList.add('headerDown');
}

function ScrollHeader() {
    setInterval(function () {
        if (didScroll === false) {
            headerDown();
        }
    }, 500);
}

function headerQue(){
    didScroll = true;
    if (didScroll) {
        headerUp();
        setTimeout(function () {
            didScroll = false;
        }, 500)
    }
}

function init() {
    window.addEventListener('scroll', headerQue);
    ScrollHeader();
}

init();