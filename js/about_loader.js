const preloader = document.getElementById("js-preloader");

const materialAnd = document.querySelector("#js-material"),
    titleFirst = document.querySelectorAll("#js-material span");

const Solution = document.querySelector("#js-solution"),
    titleSecond = document.querySelectorAll("#js-solution span");

const body1 = document.querySelector("#js-body1"),
    body2 = document.querySelector("#js-body2"),
    body3 = document.querySelector("#js-body3");

const header = document.querySelector("header");

const profile = document.querySelector("#js-profile");

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function bodyLoader() {
    body1.classList.remove("body_preloader");
    body1.classList.add("body_loader");
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
        // homeGif.style.opacity = "1.0";
        titleLoader_1(0);
        headerLoader();
    }, 1000);
}

function preloaderIn() {
    preloader.style.top = "0";
    // homeGif.style.opacity = "0";
    profile.src = "https://jkms5785.github.io/MaterialAndSolution/img/profile.png"
    console.dir(profile);
    profile.onload = function () {
        setTimeout(function () {
            preloader.style.top = "200%";
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