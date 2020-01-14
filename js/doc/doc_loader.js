const preloader = document.getElementById("js-preloader");
const header = document.querySelector("header");

const thumbnail = document.querySelector("#js-img-thumbnail");

const Lazy_imgArry = [];
const imgArry = [];

const PANEL_1 = document.querySelector("#js-video-panel_1"),
    PANEL_2 = document.querySelector("#js-video-panel_2"),
    PANEL_3 = document.querySelector("#js-video-panel_3"),
    PANEL_4 = document.querySelector("#js-video-panel_4");

let i = 0,
    a = 1;
let imgNum = 17;

for (a = 1; a < imgNum + 1; a++) {
    eval(`var img_${a} = document.querySelector("#js-img-${a < 10 ? `0${a}` : a}");`);
}

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function videoLoader() {
    PANEL_1.src = "https://player.vimeo.com/video/383482841?autoplay=1&loop=1&autopause=0&quality=2k&muted=1";
    PANEL_2.src = "https://player.vimeo.com/video/383474322?autoplay=1&loop=1&autopause=0&quality=2k&muted=1";
    PANEL_3.src = "https://player.vimeo.com/video/383683545?autoplay=1&loop=1&autopause=0&quality=2k&muted=1";
    PANEL_4.src = "https://player.vimeo.com/video/383474426?autoplay=1&loop=1&autopause=0&quality=2k&muted=1";
}

function imgLoader(i) {
    if (i < imgNum) {
        i++;
        imgArry[i - 1] = new Image();
        imgArry[i - 1].src = `img/doc_source/img/${i < 10 ? `0${i}` : i}-1.png`;
        imgArry[i - 1].onload = function () {
            let imgResult = new Function(`i`, `img_${i}.src = imgArry[${i - 1}].src;`);
            imgResult(i);
            imgLoader(i);
        }
    } else {
        i = 0;
    }
}

function lazyLoader(i) {
    if (i < imgNum) {
        i++;
        Lazy_imgArry[i - 1] = new Image();
        Lazy_imgArry[i - 1].src = `img/doc_source/lazyload/${i < 10 ? `0${i}` : i}.png`;
        Lazy_imgArry[i - 1].onload = function () {
            let lazyResult = new Function(`i`, `img_${i}.src = Lazy_imgArry[${i - 1}].src;`);
            lazyResult(i);
            lazyLoader(i);
        }
    } else {
        i = 0;
        img_17.alt = "hackathon_img_loaded"; // side btn event que
        imgLoader(i);
    }
}

function preloaderOut() {
    setTimeout(function () {
        preloader.style.height = "0";
        headerLoader();
    }, 1000);
}

function preloaderIn() {
    const img_thumbnail = new Image();
    img_thumbnail.src = "img/doc_source/doc_thumbnail.png";

    preloader.style.top = "0";
    img_thumbnail.onload = function () {
    setTimeout(function () {
        thumbnail.src = img_thumbnail.src;
        thumbnail.alt = "thumbnail";
        preloader.style.top = "200%";
        preloaderOut();
        lazyLoader(i);
        videoLoader();
    }, 1000);
    }
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);
}

init();