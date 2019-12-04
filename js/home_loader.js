const preloader = document.getElementById("js-preloader"),
    gifCont = document.getElementById("js-gifCont"),
    homeGif = document.getElementById("js_homeGif");

    const materialAnd = document.querySelector("#js-material"),
        titleFirst = document.querySelectorAll("#js-material span");

const Solution = document.querySelector("#js-solution"),
    titleSecond = document.querySelectorAll("#js-solution span");

const body = document.querySelector("#js-body");

const header = document.querySelector("header");

const arrow = document.querySelector("#js-arrow"),
    arrowCont = arrow.children[0],
    arrowBody = arrow.children[1],
    arrowLine = arrow.children[0].children[0],
    arrowHead = arrow.children[0].children[1];

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
    setTimeout(function () {
        arrowLoader();
    }, 300);
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
        preloader.style.height = "0";
        homeGif.style.opacity = "1.0";
        titleLoader_1(0);
        headerLoader();
    }, 1000);
}

function preloaderIn() {
    preloader.style.top = "0";
    homeGif.src = "img/home_logo.gif";
    homeGif.style.opacity = "0";
    homeGif.onload = function () {
        setTimeout(function () {
            preloader.style.top = "200%";
            preloaderOut();
        }, 1000);
    }
}

function arrowHovered() {
    arrowLine.style.animationPlayState = "paused";
    arrowHead.style.animationPlayState = "paused";
    arrowLine.style.fill = "#2F75FF";
    arrowHead.style.fill = "#2F75FF";
    arrowBody.style.color = "#2F75FF";
    arrowCont.classList.add("arrowRotate_home");
    arrowCont.classList.remove("arrowRotateOrigin_home");
}

function arrowUnHovered() {
    arrowLine.style.animationPlayState = "";
    arrowHead.style.animationPlayState = "";
    arrowLine.style.fill = "#393939";
    arrowHead.style.fill = "#393939";
    arrowBody.style.color = "#393939";
    arrowCont.classList.remove("arrowRotate_home");
    arrowCont.classList.add("arrowRotateOrigin_home");
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);

    arrow.addEventListener("mouseover", arrowHovered);
    arrow.addEventListener("mouseleave", arrowUnHovered);
    arrowLine.style.fill = "#393939";
    arrowHead.style.fill = "#393939";
}

init();