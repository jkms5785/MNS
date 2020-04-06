const txt_1 = document.querySelector("#js-txt_1"),
    txt_2 = document.querySelector("#js-txt_2");

const trg_1 = document.querySelector("#js-txt_trg_1"),
    trg_2 = document.querySelector("#js-txt_trg_2");

const txt_tg_1 = document.querySelectorAll(".js-txt-tg_1"),
    txt_tg_2 = document.querySelectorAll(".js-txt-tg_2");

let j = 0;
let z = 0;
let currentY;

function txtUp_2() {
    if (j < txt_tg_2.length) {
        setTimeout(function () {
            txt_tg_2[j].classList.remove("txt_before");
            txt_tg_2[j].classList.add("txt_after");
            j++;
            txtUp_2(j);
        }, 100);
    } else if (j === txt_tg_2.length) {
        j = 0;
    }
}

function txtUp_1() {
    if (z < txt_tg_1.length) {
        setTimeout(function () {
            txt_tg_1[z].classList.remove("txt_before");
            txt_tg_1[z].classList.add("txt_after");
            z++;
            txtUp_1(z);
        }, 24);
    } else if (z === txt_tg_1.length) {
        z = 0;
    }
}

function txt_Que(e) {
    e.preventDefault();
    currentY = window.scrollY;
    if (currentY >= trg_2.offsetTop - 400 && currentY <= trg_2.offsetTop + trg_2.offsetHeight - 400) {
        txtUp_2();
    } else if (currentY <= trg_2.offsetTop - 200 || currentY >= trg_2.offsetTop + trg_2.offsetHeight - 200) {
        txtReset_2();
    }

    if (currentY >= trg_1.offsetTop - 400 && currentY <= trg_1.offsetTop + trg_1.offsetHeight - 400) {
        txtUp_1();
    } else if (currentY <= trg_1.offsetTop - 200 || currentY >= trg_1.offsetTop + trg_1.offsetHeight - 200) {
        txtReset_1();
    }
}

function txtReset_2() {
    let i = 0;
    for (i = 0; i < txt_tg_2.length; i++) {
        txt_tg_2[i].classList.remove("txt_after");
        txt_tg_2[i].classList.add("txt_before");
    }
}

function txtReset_1() {
    let i = 0;
    for (i = 0; i < txt_tg_1.length; i++) {
        txt_tg_1[i].classList.remove("txt_after");
        txt_tg_1[i].classList.add("txt_before");
    }
}

window.addEventListener("scroll", txt_Que);