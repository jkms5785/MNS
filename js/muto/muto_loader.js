const preloader = document.getElementById("js-preloader");
const header = document.querySelector("header");

const thumbnail = document.querySelector("#js-img-thumbnail");

const Lazy_imgArry = [];
const imgArry = [];

const selectPhoto = document.querySelector("#js-video-selectPhoto"),
    putMusic = document.querySelector("#js-video-putMusic"),
    present = document.querySelector("#js-video-present"),
    listen = document.querySelector("#js-video-listen"),
    print = document.querySelector("#js-video-print");

let i = 0,
    a = 1;
let imgNum = 18;

for (a = 1; a < imgNum + 1; a++) {
    eval(`var img_${a} = document.querySelector("#js-img-${a < 10 ? `0${a}` : a}");`);
}

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function videoLoader() {
    selectPhoto.src = "https://player.vimeo.com/video/363292104?autoplay=1&loop=1&autopause=0&quality=720p&muted=1";
    putMusic.src = "https://player.vimeo.com/video/363292164?autoplay=1&loop=1&autopause=0&quality=720p&muted=1";

    selectPhoto, putMusic.onload = function () {
        present.src = "https://player.vimeo.com/video/363295092?autoplay=1&loop=1&autopause=0&quality=720p&muted=1";
        listen.src = "https://player.vimeo.com/video/363292261?autoplay=1&loop=1&autopause=0&quality=720p&muted=1";

        present, listen.onload = function () {
            print.src = "https://player.vimeo.com/video/363294872?autoplay=1&loop=1&autopause=0&quality=720p&muted=1";
        }
    }
}

function imgLoader(i) {
    if (i < imgNum) {
        i++;
        imgArry[i - 1] = new Image();
        imgArry[i - 1].src = `img/muto_source/img/${i < 10 ? `0${i}` : i}-1.png`;
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
        Lazy_imgArry[i - 1].src = `img/muto_source/lazyload/${i < 10 ? `0${i}` : i}.png`;
        Lazy_imgArry[i - 1].onload = function () {
            let lazyResult = new Function(`i`, `img_${i}.src = Lazy_imgArry[${i - 1}].src;`);
            lazyResult(i);
            lazyLoader(i);
        }
    } else {
        i = 0;
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
    const img_thumbnail_1 = new Image();

    img_thumbnail_1.src = "img/muto_source/muto_thumbnail.png";

    preloader.style.top = "0";
    img_thumbnail_1.onload = function () {
        setTimeout(function () {
            thumbnail.src = img_thumbnail_1.src;
            const img_thumbnail_2 = new Image();
            img_thumbnail_2.src = "img/muto_source/muto_thumbnail.png";
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