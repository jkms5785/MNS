const preloader = document.getElementById("js-preloader");
const header = document.querySelector("header");

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function preloaderOut() {
    setTimeout(function () {
        preloader.style.height = "0";
        headerLoader();
    }, 1000);
}

function profileLoader() {
    // profileCont.classList.remove("photo_preloader");
    // profileCont.classList.add("photo_loader");
}

function preloaderIn() {
    preloader.style.top = "0";
    // const insertImg = document.createElement("img");
    // profileCont.appendChild(insertImg);
    // insertImg.src = "https://jkms5785.github.io/MaterialAndSolution/img/profile.png";
    // insertImg.alt = "MOONSOO-profile";
    // insertImg.id = "profileLoaded";
    // const profileImg = document.querySelector("#profileLoaded");

    // profileImg.onload = function () {
        setTimeout(function () {
            preloader.style.top = "200%";
            preloaderOut();
        }, 1000);
    // }
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);
}

init();