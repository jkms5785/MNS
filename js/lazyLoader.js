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

function imageQue3(){
    overview2.src = "img/muto_source/app_teaser.png";
    overview2.alt = "overview_product";
}

function imageQue2(){
    overview1.src = "img/muto_source/product_teaser.png";
    overview1.alt = "overview_product";
}

function imageQue1(){
    background.src = "img/muto_source/muto_background.png";
    background.alt = "background";
}

function imageLoader(){
    background.src ="img/muto_source/muto_background.png"
    overview1.src = "img/muto_source/lazyLoader/lazy_product_teaser.png";
    overview2.src = "img/muto_source/lazyLoader/lazy_app_teaser.png";
    interview.src = "img/muto_source/lazyLoader/lazy_interview.png";
    finding.src = "img/muto_source/lazyLoader/lazy_finding.png";
    setTimeout(function(){
        imageLoader2();
    },1000);
}

function ScrollValue(){
    let currentScroll = Math.floor(window.pageYOffset);
    if(currentScroll - 600 < background.parentElement.offsetTop){
        // imageQue1();
    }else if (currentScroll - 600 < overview1.parentElement.offsetTop){
        imageQue2();
    }else if (currentScroll - 600 < overview2.parentElement.offsetTop){
        imageQue3();
    }

    //else if 스크롤이 끝에 닿으면 이벤트리스너 지우기.
}

function preloaderOut() {
    setTimeout(function () {
        preloader.style.height = "0";
        thumbnail.style.opacity = "1.0";
        headerLoader();
        imageLoader();
    }, 1000);
}

function preloaderIn() {
    preloader.style.top = "0";
    thumbnail.src = "img/muto_source/muto_thumbnail.png";
    thumbnail.alt = "thumbnail";
    thumbnail.style.opacity = "0";

    thumbnail.onload = function () {
        setTimeout(function () {
            preloader.style.top = "200%";
            preloaderOut();
        }, 1000);
    }
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);

    window.addEventListener("scroll", ScrollValue);
}

init();