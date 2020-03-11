const preloader = document.getElementById("js-preloader"),
    gifCont = document.getElementById("js-gifCont"),
    homeGif = document.getElementById("js_homeGif");

const materialAnd = document.querySelector("#js-material"),
    titleFirst = document.querySelectorAll("#js-material span");

const Solution = document.querySelector("#js-solution"),
    titleSecond = document.querySelectorAll("#js-solution span");

const body1 = document.querySelector("#js-body1"),
    body2 = document.querySelector("#js-body2");

const header = document.querySelector("header");

const arrow = document.querySelector("#js-arrow"),
    arrowCont = arrow.children[0],
    arrowBody = arrow.children[1],
    arrowLine = arrow.children[0].children[0],
    arrowHead = arrow.children[0].children[1];

const workAni = document.querySelector("#js-workAni");

const clickGuide = document.querySelector("#js-clickGuide");

const workImage = document.querySelectorAll(".js-workImage");

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
        preloader.style.height = "0";
        titleLoader_1(0);
        headerLoader();
    }, 1000);
}

function gifImageLoader() {
    let GifImg = new Image();
    GifImg.src = "img/work_latup_m.gif";
}

function preloaderIn() {
    preloader.style.height = "100%";
    workImage[0].src = "img/work_doc.png";
    workImage[1].src = "img/work_muto.png";
    
    workImage[0], workImage[1].onload = function () {
        workImage[2].src = "img/work_latup.png";
        workImage[3].src = "img/work_grayblock.png";
        setTimeout(function () {
            preloader.style.top = "100%";
            preloaderOut();
            gifImageLoader();
        }, 1000);
    }
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

function scrollTo() {
    const scrollTarget = document.querySelector("#js-scrollTo");
    const scrollY = scrollTarget.offsetTop;

    window.scroll({
        top: scrollY - 60,
        behavior: "smooth"
    })
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);
    arrow.addEventListener("mouseover", arrowHovered);
    arrow.addEventListener("mouseleave", arrowUnHovered);
    arrow.addEventListener("click", scrollTo);
    arrowLine.style.fill = "#393939";
    arrowHead.style.fill = "#393939";
}

init();