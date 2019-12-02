const preloader = document.getElementById("js-preloader");
const header = document.querySelector("header");

const thumbnail = document.querySelector("#js-img-thumbnail");

const background = document.querySelector("#js-img-background"),
    overview_01 = document.querySelector("#js-img-overview_01"),
    overview_02 = document.querySelector("#js-img-overview_02");

const interview = document.querySelector("#js-img-interview"),
    finding = document.querySelector("#js-img-finding"),
    concept = document.querySelector("#js-img-concept");

const structure = document.querySelector("#js-img-structure"),
    process = document.querySelector("#js-img-process"),
    usertest = document.querySelector("#js-img-usertest");

const iterations_01 = document.querySelector("#js-img-iterations_01"),
    iterations_02 = document.querySelector("#js-img-iterations_02"),
    iterations_03 = document.querySelector("#js-img-iterations_03");

const prototype = document.querySelector("#js-img-prototype"),
    elements = document.querySelector("#js-img-elements"),
    product_01 = document.querySelector("#js-img-product_01");

const product_02 = document.querySelector("#js-img-product_02"),
    taps = document.querySelector("#js-img-taps"),
    exhibition = document.querySelector("#js-img-exhibition");

const selectPhoto = document.querySelector("#js-video-selectPhoto"),
    putMusic = document.querySelector("#js-video-putMusic"),
    present = document.querySelector("#js-video-present"),
    listen = document.querySelector("#js-video-listen"),
    print = document.querySelector("#js-video-print");

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
        print.src = "https://player.vimeo.com/video/363294872?autoplay=1&loop=1&autopause=0&quality=720p&muted=1";
    }
}

const Lazy_imgArry = [];
const imgArry = [];

function imgLoader_6() {
    imgArry[15] = new Image();
    imgArry[15].src = "img/muto_source/img/16_product.png";

    imgArry[16] = new Image();
    imgArry[16].src = "img/muto_source/img/17_taps.png";

    imgArry[17] = new Image();
    imgArry[17].src = "img/muto_source/img/18_exhibition.png";

    imgArry[15, 16, 17].onload = function () {
        product_02.src = imgArry[15].src;
        taps.src = imgArry[16].src;
        exhibition.src = imgArry[17].src;
         videoLoader();
    }
}


function imgLoader_5() {
    imgArry[12] = new Image();
    imgArry[12].src = "img/muto_source/img/13_prototype.png";

    imgArry[13] = new Image();
    imgArry[13].src = "img/muto_source/img/14_elements.png";

    imgArry[14] = new Image();
    imgArry[14].src = "img/muto_source/img/15_product.png";

    imgArry[12, 13, 14].onload = function () {
        prototype.src = imgArry[12].src;
        elements.src = imgArry[13].src;
        product_01.src = imgArry[14].src;
        imgLoader_6();
    }
}


function imgLoader_4() {
    imgArry[9] = new Image();
    imgArry[9].src = "img/muto_source/img/10_iterations.png";

    imgArry[10] = new Image();
    imgArry[10].src = "img/muto_source/img/11_iterations.png";

    imgArry[11] = new Image();
    imgArry[11].src = "img/muto_source/img/12_iterations.png";

    imgArry[9, 10, 11].onload = function () {
        iterations_01.src = imgArry[9].src;
        iterations_02.src = imgArry[10].src;
        iterations_03.src = imgArry[11].src;
        imgLoader_5();
    }
}

function imgLoader_3() {
    imgArry[6] = new Image();
    imgArry[6].src = "img/muto_source/img/07_structure.png";

    imgArry[7] = new Image();
    imgArry[7].src = "img/muto_source/img/08_process.png";

    imgArry[8] = new Image();
    imgArry[8].src = "img/muto_source/img/09_usertest.png";

    imgArry[6, 7, 8].onload = function () {
        structure.src = imgArry[6].src;
        process.src = imgArry[7].src;
        usertest.src = imgArry[8].src;
        imgLoader_4();
    }
}


function imgLoader_2() {
    imgArry[3] = new Image();
    imgArry[3].src = "img/muto_source/img/04_interview.png";

    imgArry[4] = new Image();
    imgArry[4].src = "img/muto_source/img/05_finding.png";

    imgArry[5] = new Image();
    imgArry[5].src = "img/muto_source/img/06_concept.png";

    imgArry[3, 4, 5].onload = function () {
        interview.src = imgArry[3].src;
        finding.src = imgArry[4].src;
        concept.src = imgArry[5].src;
        imgLoader_3();
    }
}

function imgLoader_1() {
    imgArry[0] = new Image();
    imgArry[0].src = "img/muto_source/img/01_background.png";

    imgArry[1] = new Image();
    imgArry[1].src = "img/muto_source/img/02_product.png";

    imgArry[2] = new Image();
    imgArry[2].src = "img/muto_source/img/03_app.png";

    imgArry[0, 1, 2].onload = function () {
        background.src = imgArry[0].src;
        overview_01.src = imgArry[1].src;
        overview_02.src = imgArry[2].src;
        imgLoader_2();
    }
}

function Lazy_imgLoader_6() {
    Lazy_imgArry[15] = new Image();
    Lazy_imgArry[15].src = "img/muto_source/lazyload/16.png";

    Lazy_imgArry[16] = new Image();
    Lazy_imgArry[16].src = "img/muto_source/lazyload/17.png";

    Lazy_imgArry[17] = new Image();
    Lazy_imgArry[17].src = "img/muto_source/lazyload/18.png";

    Lazy_imgArry[15, 16, 17].onload = function () {
        product_02.src = Lazy_imgArry[15].src;
        taps.src = Lazy_imgArry[16].src;
        exhibition.src = Lazy_imgArry[17].src;
        imgLoader_1();
    }
}

function Lazy_imgLoader_5() {
    Lazy_imgArry[12] = new Image();
    Lazy_imgArry[12].src = "img/muto_source/lazyload/13.png";

    Lazy_imgArry[13] = new Image();
    Lazy_imgArry[13].src = "img/muto_source/lazyload/14.png";

    Lazy_imgArry[14] = new Image();
    Lazy_imgArry[14].src = "img/muto_source/lazyload/15.png";

    Lazy_imgArry[12, 13, 14].onload = function () {
        prototype.src = Lazy_imgArry[12].src;
        elements.src = Lazy_imgArry[13].src;
        product_01.src = Lazy_imgArry[14].src;
        Lazy_imgLoader_6();
    }
}

function Lazy_imgLoader_4() {
    Lazy_imgArry[9] = new Image();
    Lazy_imgArry[9].src = "img/muto_source/lazyload/10.png";

    Lazy_imgArry[10] = new Image();
    Lazy_imgArry[10].src = "img/muto_source/lazyload/11.png";

    Lazy_imgArry[11] = new Image();
    Lazy_imgArry[11].src = "img/muto_source/lazyload/12.png";

    Lazy_imgArry[9, 10, 11].onload = function () {
        iterations_01.src = Lazy_imgArry[9].src;
        iterations_02.src = Lazy_imgArry[10].src;
        iterations_03.src = Lazy_imgArry[11].src;
        Lazy_imgLoader_5();
    }
}

function Lazy_imgLoader_3() {
    Lazy_imgArry[6] = new Image();
    Lazy_imgArry[6].src = "img/muto_source/lazyload/07.png";

    Lazy_imgArry[7] = new Image();
    Lazy_imgArry[7].src = "img/muto_source/lazyload/08.png";

    Lazy_imgArry[8] = new Image();
    Lazy_imgArry[8].src = "img/muto_source/lazyload/09.png";

    Lazy_imgArry[6, 7, 8].onload = function () {
        structure.src = Lazy_imgArry[6].src;
        process.src = Lazy_imgArry[7].src;
        usertest.src = Lazy_imgArry[8].src;
        Lazy_imgLoader_4();
    }
}

function Lazy_imgLoader_2() {
    Lazy_imgArry[3] = new Image();
    Lazy_imgArry[3].src = "img/muto_source/lazyload/04.png";

    Lazy_imgArry[4] = new Image();
    Lazy_imgArry[4].src = "img/muto_source/lazyload/05.png";

    Lazy_imgArry[5] = new Image();
    Lazy_imgArry[5].src = "img/muto_source/lazyload/06.png";

    Lazy_imgArry[3, 4, 5].onload = function () {
        interview.src = Lazy_imgArry[3].src;
        finding.src = Lazy_imgArry[4].src;
        concept.src = Lazy_imgArry[5].src;
        Lazy_imgLoader_3();
    }
}

function Lazy_imgLoader_1() {
    Lazy_imgArry[0] = new Image();
    Lazy_imgArry[0].src = "img/muto_source/lazyload/01.png";

    Lazy_imgArry[1] = new Image();
    Lazy_imgArry[1].src = "img/muto_source/lazyload/02.png";

    Lazy_imgArry[2] = new Image();
    Lazy_imgArry[2].src = "img/muto_source/lazyload/03.png";

    Lazy_imgArry[0, 1, 2].onload = function () {
        background.src = Lazy_imgArry[0].src;
        overview_01.src = Lazy_imgArry[1].src;
        overview_02.src = Lazy_imgArry[2].src;
        Lazy_imgLoader_2();
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
    thumbnail.onload = function () {
        setTimeout(function () {
            preloader.style.top = "200%";
            preloaderOut();
            Lazy_imgLoader_1();
        }, 1000);
    }
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);
}

init();