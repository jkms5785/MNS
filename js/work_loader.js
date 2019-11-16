const preloader = document.getElementById("js-preloader"),
    gifCont = document.getElementById("js-gifCont"),
    homeGif = document.getElementById("js_homeGif"),
    MNS = new Image();

const materialAnd = document.querySelector("#js-material"),
    titleFirst = document.querySelectorAll("#js-material span");

const Solution = document.querySelector("#js-solution"),
    titleSecond = document.querySelectorAll("#js-solution span");

const body1 = document.querySelector("#js-body1"),
    body2 = document.querySelector("#js-body2");

const header = document.querySelector("header");

const workAni = document.querySelector("#js-workAni");

const clickGuide = document.querySelector("#js-clickGuide");

const arrow = document.querySelector("#js-arrow"),
    arrowCont = arrow.children[0],
    arrowBody = arrow.children[1],
    arrowLine = arrow.children[0].children[0],
    arrowHead = arrow.children[0].children[1];

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function clickGudieLoader() {
    clickGuide.classList.remove("click_preloader");
    clickGuide.classList.add("click_loader");
}

function workAniLoader() {
    workAni.classList.remove("workAni_preloader");
    workAni.classList.add("workAni_loader");
    clickGudieLoader();
}

function bodyLoader() {
    body1.classList.remove("body_preloader");
    body1.classList.add("body_loader");
    setTimeout(function () {
        body2.classList.remove("body_preloader");
        body2.classList.add("body_loader");
        workAniLoader();
    }, 300);
}

function arrowLoader() {
    arrow.classList.remove("arrow_preloader");
    arrow.classList.add("arrow_loader");
    setTimeout(function () {
        bodyLoader();
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
        arrowLoader();
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
        // homeGif.src = MNS.src;
        preloader.style.height = "0";
        titleLoader_1(0);
        headerLoader();
    }, 1000);
}

function preloaderIn() {
    preloader.style.top = "0";
    // MNS.src = "https://jkms5785.github.io/MaterialAndSolution/img/home_logo.gif";
    // MNS.onload = function () {
    setTimeout(function () {
        preloader.style.top = "200%";
        preloaderOut();
    }, 1000);
    // }
}

function arrowHovered() {
    arrowLine.style.animationPlayState = "paused";
    arrowHead.style.animationPlayState = "paused";
    arrowLine.style.fill = "#2F75FF";
    arrowHead.style.fill = "#2F75FF";
    arrowBody.style.color = "#2F75FF";
    arrowCont.classList.add("arrowRotate");
}

function arrowUnHovered() {
    arrowLine.style.animationPlayState = "";
    arrowHead.style.animationPlayState = "";
    arrowLine.style.fill = "#393939";
    arrowHead.style.fill = "#393939";
    arrowBody.style.color = "#393939";
    arrowCont.classList.remove("arrowRotate");
}

function scrollTo(){
    console.log(1);
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);
    arrow.addEventListener("mouseover", arrowHovered);
    arrow.addEventListener("mouseleave", arrowUnHovered);
    arrow.addEventListener("click" ,scrollTo );
    arrowLine.style.fill = "#393939";
    arrowHead.style.fill = "#393939";
}

init();