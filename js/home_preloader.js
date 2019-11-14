const preloader = document.getElementById("js-preloader");
const gifCont = document.getElementById("js-gifCont");
console.log(gifCont);

function silder() {
    setTimeout(function () {
        preloader.style.top = "200%";
        preloader.style.height = "0";
    }, 1000);
}

const homeImgArray = [];

function homePreloader() {

    homeImgArray[0] = new Image();
    homeImgArray[0].src = "img/main_logo.gif";

    if (homeImgArray[0]) {

        preloader.style.top = "0";
        
        const homeGif = document.createElement("img");
        gifCont.appendChild(homeGif);
        homeGif.src = homeImgArray[0].src;

        homeImgArray[1] = new Image();
        homeImgArray[1].src = "img/work_latup_m.gif";
        silder();
    }
}

function init() {
    homePreloader();
    preloader.style.top = "-200%";
}

init();