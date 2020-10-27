const preloader = document.getElementById("js-preloader");

const materialAnd = document.querySelector("#js-material"),
    titleFirst = document.querySelectorAll("#js-material span");

const Solution = document.querySelector("#js-solution"),
    titleSecond = document.querySelectorAll("#js-solution span");

const body1 = document.querySelector("#js-body1"),
    body2 = document.querySelector("#js-body2"),
    body3 = document.querySelector("#js-body3");

const header = document.querySelector("header");

const profileCont = document.querySelector("#js-profile");

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function bodyLoader3() {
    body3.classList.remove("body_preloader");
    body3.classList.add("body_loader");
}

function bodyLoader2() {
    body2.classList.remove("body_preloader");
    body2.classList.add("body_loader");
    setTimeout(function () {
        bodyLoader3();
    }, 100);
}

function bodyLoader1() {
    body1.classList.remove("body_preloader");
    body1.classList.add("body_loader");
    setTimeout(function () {
        bodyLoader2();
    }, 100);
}

function titleLoader_2(c) {
    if (c < Solution.childElementCount) {
        setTimeout(function () {
            titleSecond[c].classList.remove("title_preloader");
            titleSecond[c].classList.add("title_loader");
            c++;
            titleLoader_2(c);
        }, 12);
    } else if (c === Solution.childElementCount) {
        setTimeout(() => {
            bodyLoader1();
            profileLoader();
        }, 200);
    }
}

function titleLoader_1(c) {
    if (c < materialAnd.childElementCount) {
        setTimeout(function () {
            titleFirst[c].classList.remove("title_preloader");
            titleFirst[c].classList.add("title_loader");
            c++;
            titleLoader_1(c);
        }, 12);
    } else if (c === materialAnd.childElementCount) {
        titleLoader_2(0);
    }
}

function preloaderOut() {
    setTimeout(function () {
        preloader.style.opacity = "0";
        preloader.style.zIndex = "-9999";
        titleLoader_1(0);
        headerLoader();
    }, 1000);
}

function profileLoader() {
    profileCont.classList.remove("photo_preloader");
    profileCont.classList.add("photo_loader");
}

function preloaderIn() {
    preloader.style.transform = "translateY(100%)";
    const insertImg = document.createElement("img");
    profileCont.appendChild(insertImg);
    insertImg.src = "img/profile.png";
    insertImg.alt = "MOONSOO-profile";
    insertImg.id = "profileLoaded";
    const profileImg = document.querySelector("#profileLoaded");

    profileImg.onload = function () {
        setTimeout(function () {
            preloader.style.transform = "translateY(200%)";
            preloaderOut();
        }, 1000);
    }
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);
}

init();