const preloader = document.getElementById("js-preloader");
const header = document.querySelector("header");

const thumbnail = document.querySelector("#js-img-thumbnail");

const background = document.querySelector("#js-img-background"),
    overview = document.querySelector("#js-img-overview"),
    interview = document.querySelector("#js-img-interview");

const finding = document.querySelector("#js-img-finding"),
    structure = document.querySelector("#js-img-structure"),
    process = document.querySelector("#js-img-process");

const usertest = document.querySelector("#js-img-usertest"),
    iterations_01 = document.querySelector("#js-img-iterations_01"),
    iterations_02 = document.querySelector("#js-img-iterations_02");

const prototype = document.querySelector("#js-img-prototype"),
    elements = document.querySelector("#js-img-elements"),
    docking = document.querySelector("#js-img-docking"),
    exhibition = document.querySelector("#js-img-exhibition");

const selectWorkout = document.querySelector("#js-img-selectWorkout"),
    feedback = document.querySelector("#js-img-workoutFeedback");

const gripAdjst = document.querySelector("#js-video-gripAdjust"),
    workout = document.querySelector("#js-video-workout"),
    drop = document.querySelector("#js-video-drop"),
    finish = document.querySelector("#js-video-finish");

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function videoLoader() {
    gripAdjst.src = "https://player.vimeo.com/video/364471804?autoplay=1&loop=1&autopause=0&quality=2K&muted=1";
    workout.src = "https://player.vimeo.com/video/364004115?autoplay=1&loop=1&autopause=0&quality=2K&muted=1";
    gripAdjst, workout.onload = function () {
        drop.src = "https://player.vimeo.com/video/364283538?autoplay=1&loop=1&autopause=0&quality=2K&muted=1";
        finish.src = "https://player.vimeo.com/video/364474701?autoplay=1&loop=1&autopause=0&quality=2K&muted=1";
    }
}

const Lazy_imgArry = [];
const imgArry = [];

function imgLoader_4() {
    imgArry[9] = new Image();
    imgArry[9].src = "img/latup_source/img/10_prototype.png";

    imgArry[10] = new Image();
    imgArry[10].src = "img/latup_source/img/11_elements.png";

    imgArry[11] = new Image();
    imgArry[11].src = "img/latup_source/img/12_docking.png";

    imgArry[12] = new Image();
    imgArry[12].src = "img/latup_source/img/13_exhibition.png";

    imgArry[9, 10, 11, 12].onload = function () {
        prototype.src = imgArry[9].src;
        elements.src = imgArry[10].src;
        docking.src = imgArry[11].src;
        exhibition.src = imgArry[12].src;
        videoLoader();
    }
}

function imgLoader_3() {
    imgArry[6] = new Image();
    imgArry[6].src = "img/latup_source/img/07_usertest.png";

    imgArry[7] = new Image();
    imgArry[7].src = "img/latup_source/img/08_iteration.png";

    imgArry[8] = new Image();
    imgArry[8].src = "img/latup_source/img/09_iteration.png";

    imgArry[6, 7, 8].onload = function () {
        usertest.src = imgArry[6].src;
        iterations_01.src = imgArry[7].src;
        iterations_02.src = imgArry[8].src;
        imgLoader_4();
    }
}

function imgLoader_2() {
    imgArry[3] = new Image();
    imgArry[3].src = "img/latup_source/img/04_finding.png";

    imgArry[4] = new Image();
    imgArry[4].src = "img/latup_source/img/05_structure.png";

    imgArry[5] = new Image();
    imgArry[5].src = "img/latup_source/img/06_process.png";

    imgArry[3, 4, 5].onload = function () {
        finding.src = imgArry[3].src;
        structure.src = imgArry[4].src;
        process.src = imgArry[5].src;
        imgLoader_3();
    }
}

function imgLoader_1() {
    imgArry[0] = new Image();
    imgArry[0].src = "img/latup_source/img/01_background.png";

    imgArry[1] = new Image();
    imgArry[1].src = "img/latup_source/img/02_product.png";

    imgArry[2] = new Image();
    imgArry[2].src = "img/latup_source/img/03_interview.png";

    imgArry[0, 1, 2].onload = function () {
        background.src = imgArry[0].src;
        overview.src = imgArry[1].src;
        interview.src = imgArry[2].src;
        imgLoader_2();
    }
}

function gifLoader() {
    selectWorkout.src = "img/latup_source/img/selectWorkout.gif";
    feedback.src = "img/latup_source/img/workoutFeedback.gif";
    selectWorkout, feedback.onload = function () {
        console.log("good");
    }
}

function Lazy_imgLoader_4() {
    Lazy_imgArry[9] = new Image();
    Lazy_imgArry[9].src = "img/latup_source/lazyload/10.png";

    Lazy_imgArry[10] = new Image();
    Lazy_imgArry[10].src = "img/latup_source/lazyload/11.png";

    Lazy_imgArry[11] = new Image();
    Lazy_imgArry[11].src = "img/latup_source/lazyload/12.png";

    Lazy_imgArry[12] = new Image();
    Lazy_imgArry[12].src = "img/latup_source/lazyload/13.png";

    Lazy_imgArry[9, 10, 11, 12].onload = function () {
        prototype.src = Lazy_imgArry[9].src;
        elements.src = Lazy_imgArry[10].src;
        docking.src = Lazy_imgArry[11].src;
        exhibition.src = Lazy_imgArry[12].src;

        imgLoader_1();
    }
}

function Lazy_imgLoader_3() {
    Lazy_imgArry[6] = new Image();
    Lazy_imgArry[6].src = "img/latup_source/lazyload/07.png";

    Lazy_imgArry[7] = new Image();
    Lazy_imgArry[7].src = "img/latup_source/lazyload/08.png";

    Lazy_imgArry[8] = new Image();
    Lazy_imgArry[8].src = "img/latup_source/lazyload/09.png";

    Lazy_imgArry[6, 7, 8].onload = function () {
        usertest.src = Lazy_imgArry[6].src;
        iterations_01.src = Lazy_imgArry[7].src;
        iterations_02.src = Lazy_imgArry[8].src;
        Lazy_imgLoader_4();
    }
}

function Lazy_imgLoader_2() {
    Lazy_imgArry[3] = new Image();
    Lazy_imgArry[3].src = "img/latup_source/lazyload/04.png";

    Lazy_imgArry[4] = new Image();
    Lazy_imgArry[4].src = "img/latup_source/lazyload/05.png";

    Lazy_imgArry[5] = new Image();
    Lazy_imgArry[5].src = "img/latup_source/lazyload/06.png";

    Lazy_imgArry[3, 4, 5].onload = function () {
        finding.src = Lazy_imgArry[3].src;
        structure.src = Lazy_imgArry[4].src;
        process.src = Lazy_imgArry[5].src;
        Lazy_imgLoader_3();
    }
}

function Lazy_imgLoader_1() {
    Lazy_imgArry[0] = new Image();
    Lazy_imgArry[0].src = "img/latup_source/lazyload/01.png";

    Lazy_imgArry[1] = new Image();
    Lazy_imgArry[1].src = "img/latup_source/lazyload/02.png";

    Lazy_imgArry[2] = new Image();
    Lazy_imgArry[2].src = "img/latup_source/lazyload/03.png";

    Lazy_imgArry[0, 1, 2].onload = function () {
        background.src = Lazy_imgArry[0].src;
        overview.src = Lazy_imgArry[1].src;
        interview.src = Lazy_imgArry[2].src;
        Lazy_imgLoader_2();
        gifLoader();
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
    thumbnail.src = "img/latup_source/latup_thumbnail.png";
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