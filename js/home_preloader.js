const preloader = document.getElementById("js-preloader");

function silder() {
    console.log(preloader);
    preloader.classList.add("test");
}

const homeImgArray = [];

function imageLoad() {
    homeImgArray[0] = new Image();
    homeImgArray[0].src = "img/main_logo.gif";
    homeImgArray[1] = new Image();
    homeImgArray[1].src = "img/work_latup_m.gif";
    console.log(homeImgArray[0]);

    if(homeImgArray[0]){
        console.log(1);
    }
}

function init() {
    silder();
    imageLoad();
}

init();