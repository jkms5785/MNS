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
        if (currentY >= trg_1.offsetTop - 320 && currentY <= trg_1.offsetTop + trg_1.offsetHeight) {
            z = 0;
            MnS_load();
            setTimeout(() => {
                txtUp_1();
            }, 3000);
        }
    } else if (fireTxt_1 == false) {
        if (currentY <= trg_1.offsetTop - 320 || currentY >= trg_1.offsetTop + trg_1.offsetHeight) {
            txtReset_1();
            MnS_Reset();
        }
    }

    if (fireTxt_2 == true) {
        if (currentY >= trg_2.offsetTop - 320 && currentY <= trg_2.offsetTop + trg_2.offsetHeight) {
            j = 0;
            txtUp_2();
            FmTs_Load();
        }
    } else if (fireTxt_2 == false) {
        if (currentY <= trg_2.offsetTop - 320 || currentY >= trg_2.offsetTop + trg_2.offsetHeight) {
            txtReset_2();
            FmTs_Reset();
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

const MnS_rect = document.querySelector("#js-MnS-rect"),
    MnS_cir = document.querySelector("#js-MnS-cir"),
    MnS_grd = document.querySelector("#js-MnS-grd");

const FmTs = document.querySelectorAll(".js-FmTs");

const MnS_set = () => {
    MnS_rect.style.setProperty(`transform`, `scale(0.6)`);
    MnS_rect.style.setProperty(`opacity`, `0`);
    MnS_rect.style.setProperty(`-webkit-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_rect.style.setProperty(`-moz-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_rect.style.setProperty(`-o-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_rect.style.setProperty(`transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    MnS_rect.style.setProperty(`-webkit-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_rect.style.setProperty(`-moz-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_rect.style.setProperty(`-o-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_rect.style.setProperty(`transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    MnS_cir.style.setProperty(`transform`, `scale(0.4)`);
    MnS_cir.style.setProperty(`opacity`, `0`);
    MnS_cir.style.setProperty(`-webkit-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_cir.style.setProperty(`-moz-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_cir.style.setProperty(`-o-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_cir.style.setProperty(`transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    MnS_cir.style.setProperty(`-webkit-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_cir.style.setProperty(`-moz-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_cir.style.setProperty(`-o-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    MnS_cir.style.setProperty(`transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
}

const MnS_load = () => {
    fireTxt_1 = false;
    MnS_rect.style.setProperty(`transform`, `scale(1.0)`);
    MnS_rect.style.setProperty(`opacity`, `1`);
    setTimeout(() => {
        MnS_gradation();
    }, 1000);
}

let g = 0;

const MnS_Reset = () => {
    MnS_rect.style.setProperty(`transform`, `scale(0.6)`);
    MnS_rect.style.setProperty(`opacity`, `0`);
    MnS_cir.style.setProperty(`transform`, `scale(0.4)`);
    MnS_cir.style.setProperty(`opacity`, `0`);
    MnS_grd.children[1].setAttribute(`points`, `0,272 272,0 272,0 0,272`);
}

const MnS_gradation = () => {
    setTimeout(() => {
        if (g <= 256) {
            // 0,272 272,0 272,0 0,272
            // 0,272 272,0 528,410 410,528
            let x = g;
            let y = 1.6 * g;
            MnS_grd.children[1].setAttribute(`points`, `0,272 272,0 ${272 + x},${y} ${y},${272 + x}`);
            g = g + 2;
            MnS_gradation(a);
        } else {
            g = 0;
            MnS_cir.style.setProperty(`transform`, `scale(1.0)`);
            MnS_cir.style.setProperty(`opacity`, `1`);
        }
    }, 8);
}

const FmTs_set = () => {
    for (let k = 0; k < FmTs.length; k++) {
        FmTs[k].style.setProperty(`transform`, `scale(0.2)`);
        FmTs[k].style.setProperty(`opacity`, `0`);
        FmTs[k].style.setProperty(`-webkit-transition`, `all 700ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
        FmTs[k].style.setProperty(`-moz-transition`, `all 700ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
        FmTs[k].style.setProperty(`-o-transition`, `all 700ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
        FmTs[k].style.setProperty(`transition`, `all 700ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

        FmTs[k].style.setProperty(`-webkit-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
        FmTs[k].style.setProperty(`-moz-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
        FmTs[k].style.setProperty(`-o-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
        FmTs[k].style.setProperty(`transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

        FmTs[k].style.setProperty(`top`, `${k * 122}px`);
        FmTs[k].style.setProperty(`left`, `${k * 190}px`);
        // x = 190, y = 122;
    }
}
let o = 0;

const FmTs_Load = (a) => {
    setTimeout(function () {
        FmTs[o].style.setProperty(`transform`, `scale(1.0)`);
        FmTs[o].style.setProperty(`opacity`, `1.0`);
        o++;
        if (o < FmTs.length) {
            FmTs_Load(o);
        } else {
            console.log(`i is ${o}, Fmts.lenght is ${FmTs.length}`);
            o = 0;
        }
    }, 300);
}

const FmTs_Reset = () => {
    for (let k = 0; k < FmTs.length; k++) {
        FmTs[k].style.setProperty(`transform`, `scale(0.2)`);
        FmTs[k].style.setProperty(`opacity`, `0`);
    }
}

FmTs_set();
MnS_set();

window.addEventListener("scroll", txt_Que);