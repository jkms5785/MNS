const preloader = document.getElementById("js-preloader");

function silder() {
    console.log(preloader);  
}

const homeImgArray = [];

function imageLoad() {
    homeImgArray[0] = new Image();
    homeImgArray[0].src = "img/main_logo.gif";
    homeImgArray[1] = new Image();
    homeImgArray[1].src = "img/work_latup_m.gif";

    if(homeImgArray[0]){
        preloader.classList.add("prelaoder_down");
        console.dir(homeImgArray[0]);
        console.dir(homeImgArray[1]);
    }
}

function init() {
    silder();
    imageLoad();
}

init();