const preloader = document.getElementById("js-preloader");
const gifCont = document.getElementById("js-gifCont");
const homeGif = document.getElementById("js_homeGif");

function preloaderFadeOut() {
    setTimeout(function () {
        preloader.style.height = "0";
    }, 1000);
}

function preloaderDown() {
    setTimeout(function () {
        preloader.style.top = "200%";
        preloaderFadeOut();
    }, 1000);
}

const homeImgArray = [];

function homePreloader() {

    preloader.style.top = "0";

    const MNS = new Image();
    MNS.src = "https://jkms5785.github.io/MaterialAndSolution/img/home_logo.gif";

    homeGif.src = MNS.src;

    MNS.onload = function () {
        preloaderDown();
    }

}

function init() {
    homePreloader();
    preloader.style.opacity = "0.3";
}

init();