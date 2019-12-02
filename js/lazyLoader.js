const preloader = document.getElementById("js-preloader");
const header = document.querySelector("header");

const thumbnail = document.querySelector("#js-imgThumbnail"),
    background = document.querySelector("#js-imgBackground"),
    overview1 = document.querySelector("#js-imgOverview1"),
    overview2 = document.querySelector("#js-imgOverview2"),
    interview = document.querySelector("#js-imgInterview"),
    finding = document.querySelector("#js-imgFinding");

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

const Lazy_imgCont = [];

function imageLoader_2(){
    setTimeout(() => {
        console.log("imgloader2");
    }, 1000);
}

function imageLoader_1(){
    Lazy_imgCont[0] = new Image();
    Lazy_imgCont[0].src = "img/muto_source/lazyLoader/lazy_product_teaser.png";

    Lazy_imgCont[1] = new Image();
    Lazy_imgCont[1].src = "img/muto_source/lazyLoader/lazy_app_teaser.png";

    Lazy_imgCont[2] = new Image();
    Lazy_imgCont[2].src = "img/muto_source/lazyLoader/lazy_interview.png";

    Lazy_imgCont[3] = new Image();
    Lazy_imgCont[3].src = "img/muto_source/lazyLoader/lazy_finding.png";
    
    Lazy_imgCont[0, 1, 2, 3].onload = function(){
        console.log("finish uploading");
        console.dir(Lazy_imgCont);
        imageLoader_2()
    }
}

function preloaderOut() {
    setTimeout(function () {
        preloader.style.height = "0";
        headerLoader();
    }, 1000);
}

function preloaderIn() {
    preloader.style.top = "0";
    thumbnail.src = "img/muto_source/muto_thumbnail.png";
    thumbnail.alt = "thumbnail";
    thumbnail.onload = function () {
        setTimeout(function () {
            preloader.style.top = "200%";
            preloaderOut();
            imageLoader_1();
        }, 1000);
    }
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);
}

init();