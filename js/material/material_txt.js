const txt_1 = document.querySelector("#js-txt_1"),
    txt_2 = document.querySelector("#js-txt_2");

const trg_1 = document.querySelector("#js-txt_trg_1"),
    trg_2 = document.querySelector("#js-txt_trg_2");

const txt_tg_1 = document.querySelectorAll(".js-txt-tg_1"),
    txt_tg_2 = document.querySelectorAll(".js-txt-tg_2");

let j = 0;
let z = 0;
let currentY;
let fireTxt_1 = true,
    fireTxt_2 = true;

function txtUp_2() {
    fireTxt_2 = false;
    if (j < txt_tg_2.length) {
        setTimeout(function () {
            txt_tg_2[j].classList.remove("txt_before");
            txt_tg_2[j].classList.add("txt_after");
            j++;
            if (j === 12) {
                setTimeout(function () {
                    txtUp_2(j);
                }, 800);
            } else {
                txtUp_2(j);
            }
        }, 16);
    } else if (j === txt_tg_2.length) {
        j = 0;
    }
}

function txtUp_1() {
    fireTxt_1 = false;
    if (z < txt_tg_1.length) {
        setTimeout(function () {
            txt_tg_1[z].classList.remove("txt_before");
            txt_tg_1[z].classList.add("txt_after");
            z++;
            txtUp_1(z);
        }, 16);
    } else if (z === txt_tg_1.length) {
        z = 0;
    }
}

function txt_Que(e) {
    e.preventDefault();
    currentY = window.scrollY;

    if (fireTxt_1 == true) {
        if (currentY >= trg_1.offsetTop - 400 && currentY <= trg_1.offsetTop + trg_1.offsetHeight) {
            z = 0;
            txtUp_1();
        }
    } else if (fireTxt_1 == false) {
        if (currentY <= trg_1.offsetTop - 400 || currentY >= trg_1.offsetTop + trg_1.offsetHeight) {
            txtReset_1();
        }
    }

    if (fireTxt_2 == true) {
        if (currentY >= trg_2.offsetTop - 400 && currentY <= trg_2.offsetTop + trg_2.offsetHeight) {
            j = 0;
            txtUp_2();
        }
    } else if (fireTxt_2 == false) {
        if (currentY <= trg_2.offsetTop - 400 || currentY >= trg_2.offsetTop + trg_2.offsetHeight) {
            txtReset_2();
        }
    }
}

function txtReset_2() {
    fireTxt_2 = true;
    let i = 0;
    for (i = 0; i < txt_tg_2.length; i++) {
        txt_tg_2[i].classList.remove("txt_after");
        txt_tg_2[i].classList.add("txt_before");
    }
}

function txtReset_1() {
    fireTxt_1 = true;
    let i = 0;
    for (i = 0; i < txt_tg_1.length; i++) {
        txt_tg_1[i].classList.remove("txt_after");
        txt_tg_1[i].classList.add("txt_before");
    }
}

window.addEventListener("scroll", txt_Que);