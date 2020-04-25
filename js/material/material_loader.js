const preloader = document.getElementById("js-preloader");
const header = document.querySelector("header");

const thumbnail = document.querySelector("#js-img-thumbnail");

const Lazy_imgArry = [];
const imgArry = [];

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function preloaderOut() {
    setTimeout(function () {
        preloader.style.opacity = "0";
        preloader.style.zIndex = "-9999";
        headerLoader();
    }, 1000);
}

function preloaderIn() {
    const img_thumbnail_1 = new Image();
    img_thumbnail_1.src = "img/material_source/material_thumbnail.png";

    preloader.style.transform = "translateY(100%)";
    img_thumbnail_1.onload = function () {
        setTimeout(function () {
            thumbnail.src = img_thumbnail_1.src;
            thumbnail.alt = "thumbnail";

            thumbnail.style.setProperty(`background-color`, `#2F75FF`);
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