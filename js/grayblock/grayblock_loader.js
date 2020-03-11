const preloader = document.getElementById("js-preloader");
const header = document.querySelector("header");

const thumbnail = document.querySelector("#js-img-thumbnail");

const Lazy_imgArry = [];
const imgArry = [];

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

function imgLoader(i) {
    if (i < imgNum) {
        i++;
        imgArry[i - 1] = new Image();
        imgArry[i - 1].src = `img/grayblock_source/img/${i < 10 ? `0${i}` : i}-1.png`;
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
        Lazy_imgArry[i - 1].src = `img/grayblock_source/lazyload/${i < 10 ? `0${i}` : i}.png`;
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
        preloader.style.opacity = "0";
        preloader.style.zIndex = "-9999";
        headerLoader();
    }, 1000);
}

function preloaderIn() {
    const img_thumbnail = new Image();
    img_thumbnail.src = "img/grayblock_source/grayblock_thumbnail.png";
     preloader.style.transform = "translateY(100%)";
    img_thumbnail.onload = function () {
        setTimeout(function () {
            thumbnail.src = img_thumbnail.src;
            thumbnail.alt = "thumbnail";
             preloader.style.transform = "translateY(200%)";
            preloaderOut();
            lazyLoader(i);
        }, 1000);
    }
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);

}
init();