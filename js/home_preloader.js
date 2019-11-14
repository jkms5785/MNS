const preloader = document.getElementById("js-preloader");
const gifCont = document.getElementById("js-gifCont");

function silder() {
    setTimeout(function () {
        preloader.style.top = "200%";
        preloader.style.height = "0";
    }, 1000);
}

const homeImgArray = [];

function homePreloader() {

    preloader.style.top = "0";
    const homeGif = document.createElement("img");
    gifCont.appendChild(homeGif);
    homeGif.src = "img/main_logo.gif";
    const homeGifDone = document.getElementById("MNS");

    homeGifDone.onload = function() {
        silder();
        console.log("finishi load");
    };
}

function init() {
    homePreloader();
    preloader.style.top = "-200%";
    console.log(123);
}

init();