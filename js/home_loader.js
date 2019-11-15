const preloader = document.getElementById("js-preloader"),
    gifCont = document.getElementById("js-gifCont"),
    homeGif = document.getElementById("js_homeGif"),
    MNS = new Image();

const materialAnd = document.querySelector("#js-material"),
    titleFirst = document.querySelectorAll("#js-material span");

const Solution = document.querySelector("#js-solution"),
    titleSecond = document.querySelectorAll("#js-solution span");

const body = document.querySelector("#js-body");

const header = document.querySelector("header");

const arrow = document.querySelector("#js-arrow");

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function arrowLoader() {
    arrow.classList.remove("arrow_preloader");
    arrow.classList.add("arrow_loader");
}

function bodyLoader() {
    body.classList.remove("body_preloader");
    body.classList.add("body_loader");
    arrowLoader();
}

function titleLoader_2(c) {
    if (c < Solution.childElementCount) {
        setTimeout(function () {
            titleSecond[c].classList.remove("title_preloader");
            titleSecond[c].classList.add("title_loader");
            c++;
            titleLoader_2(c);
        }, 8);
    } else if (c === Solution.childElementCount) {
        bodyLoader();
    }
}

function titleLoader_1(c) {
    if (c < materialAnd.childElementCount) {
        setTimeout(function () {
            titleFirst[c].classList.remove("title_preloader");
            titleFirst[c].classList.add("title_loader");
            c++;
            titleLoader_1(c);
        }, 8);
    } else if (c === materialAnd.childElementCount) {
        titleLoader_2(0);
    }
}

function preloaderOut() {
    setTimeout(function () {
        homeGif.src = MNS.src;
        preloader.style.height = "0";
        titleLoader_1(0);
        headerLoader();
    }, 1000);
}

function preloaderIn() {
    preloader.style.top = "0";
    MNS.src = "https://jkms5785.github.io/MaterialAndSolution/img/home_logo.gif";
    MNS.onload = function () {
        setTimeout(function () {
            preloader.style.top = "200%";
            preloaderOut();
        }, 1000);
    }
}

function arrowHovered() {
    console.log("Hovered");
}

function arrowUnHovered() {
    console.log("UnHovered");
}

function init() {
    preloaderIn();
    arrow.addEventListener("mouseover", arrowHovered);
    arrow.addEventListener("mouseleave", arrowUnHovered);

    console.dir(arrow);
}

init();