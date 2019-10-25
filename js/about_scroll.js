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
    var HeaderLogo = document.getElementsByClassName('logoAni');
    var HeaderColor = document.getElementById('headerColor');

    var blueQueAbout = document.getElementsByClassName('resume_blue');
    var blueQueAboutTop = blueQueAbout[0].offsetTop;

    if (scrolled > blueQueAboutTop) {
        HeaderColor.style.color = "white";
        for (t = 0; t < 3; t++) {
            HeaderLogo[t].style.fill = "white";
        }
    } else {
        HeaderColor.style.color = "";
        for (t = 0; t < 3; t++) {
            HeaderLogo[t].style.fill = "#2F75FF";
        }
    }


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
