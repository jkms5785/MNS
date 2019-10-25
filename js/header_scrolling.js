var didScroll;

var headerLife = document.getElementsByTagName('header');
console.log(headerLife);

function headerAni() {
    headerLife[0].classList.add('headerUp');
    headerLife[0].classList.remove('headerDown');
}

function headerAniStop() {
    headerLife[0].classList.remove('headerUp');
    headerLife[0].classList.add('headerDown');
}

window.addEventListener('scroll', () => {

    var scrolled = window.scrollY;

    didScroll = true;

    if (didScroll) {
        headerAni();

        setTimeout(function () {
            didScroll = false;
//            console.log(didScroll);
        }, 750)
    }
});


setInterval(function () {
    if (didScroll === false) {
        headerAniStop();
    }
}, 500);
    
        