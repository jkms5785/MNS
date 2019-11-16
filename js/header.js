const headerLi = document.querySelectorAll(".underline");
const pageNow = document.querySelector(".current_page"),
    pageOther = document.querySelectorAll(".other_page");

let didScroll;
const headerLife = document.getElementsByTagName('header');

function headerUp() {
    headerLife[0].classList.add('headerUp');
    headerLife[0].classList.remove('headerDown');
}

function headerDown() {
    headerLife[0].classList.remove('headerUp');
    headerLife[0].classList.add('headerDown');
}

function ScrollHeader() {
    setInterval(function () {
        if (didScroll === false) {
            headerDown();
        }
    }, 500);
}

function headerQue(){
    didScroll = true;
    if (didScroll) {
        headerUp();
        setTimeout(function () {
            didScroll = false;
        }, 500)
    }
}

function Underline() {
    this.classList.add("underlineHovered");
    this.children[0].style.opacity = "1.0";
    this.children[0].style.color = "#2F75FF"
}

function UnderlineRemove(){
    this.classList.remove("underlineHovered");
    PageDetect();
}

function PageDetect() {
    pageNow.style.color = "#2F75FF";
    pageNow.style.opacity = "0.87";
    pageOther[0].style.opacity = "0.6";
    pageOther[1].style.opacity = "0.6";
    pageOther[2].style.opacity = "0.6";
    pageOther[0].style.color = "#000000";
    pageOther[1].style.color = "#000000";
    pageOther[2].style.color = "#000000";
}

function init() {
    for (h = 0; h < headerLi.length; h++) {
        headerLi[h].addEventListener("mouseover", Underline);
        headerLi[h].addEventListener("mouseleave", UnderlineRemove);
    }
    PageDetect();
}

init();