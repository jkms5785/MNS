const txt_1 = document.querySelector("#js-txt_1"),
    txt_2 = document.querySelector("#js-txt_2");

const trg_1 = document.querySelector("#js-txt_trg_1"),
    trg_2 = document.querySelector("#js-txt_trg_2");

const txt_tg_1 = document.querySelectorAll(".js-txt-tg_1"),
    txt_tg_2 = document.querySelectorAll(".js-txt-tg_2");

let j = 0;
let z = 0;
let txtDefine = true;

let currentY;

function txtUp_2() {
    if (j < txt_tg_2.length) {
        setTimeout(function () {
            txt_tg_2[j].style.setProperty("transform", "translateY(0) rotateX(0) scale(1.0)");
            txt_tg_2[j].style.setProperty("opacity", "1.0");
            j++;
            txtUp_2(j);
        }, 16);
    } else if (j === txt_tg_2.length) {
        j = 0;
    }
}

function txtUp_1() {
    if (z < txt_tg_1.length) {
        setTimeout(function () {
            txt_tg_1[z].style.setProperty("transform", "translateY(0) rotateX(0) scale(1.0)");
            txt_tg_1[z].style.setProperty("opacity", "1.0");
            z++;
            txtUp_1(z);
        }, 16);
    } else if (z === txt_tg_1.length) {
        z = 0;
    }
}

function txt_2_Que(e) {
    e.preventDefault();
    currentY = window.scrollY;
    if (currentY >= trg_2.offsetTop - 640) {
        window.removeEventListener("scroll", txt_2_Que);
        txtUp_2();
    }
}


function txt_1_Que(e) {
    e.preventDefault();
    currentY = window.scrollY;
    if (currentY >= trg_1.offsetTop - 640) {
        window.removeEventListener("scroll", txt_1_Que);
        txtUp_1();
    }
}

function init() {
    let i = 0;
    for (i = 0; i < txt_tg_1.length; i++) {
        txt_tg_1[i].style.setProperty("-webkit-transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txt_tg_1[i].style.setProperty("-moz-transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txt_tg_1[i].style.setProperty("-o-transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txt_tg_1[i].style.setProperty("transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");

        txt_tg_1[i].style.setProperty("transform", "translateY(200px) rotateX(180deg) scale(0.6)");
        txt_tg_1[i].style.setProperty("opacity", "0");
    }

    for (i = 0; i < txt_tg_2.length; i++) {
        txt_tg_2[i].style.setProperty("-webkit-transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txt_tg_2[i].style.setProperty("-moz-transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txt_tg_2[i].style.setProperty("-o-transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txt_tg_2[i].style.setProperty("transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");

        txt_tg_2[i].style.setProperty("transform", "translateY(200px) rotateX(180deg) scale(0.6)");
        txt_tg_2[i].style.setProperty("opacity", "0");
    }
}

window.addEventListener("scroll", txt_1_Que);
window.addEventListener("scroll", txt_2_Que);

init();