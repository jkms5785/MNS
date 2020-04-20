const txt_1 = document.querySelector("#js-txt_1"),
    txt_2 = document.querySelector("#js-txt_2");

const trg_1 = document.querySelector("#js-txt_trg_1"),
    trg_2 = document.querySelector("#js-txt_trg_2");

const txt_tg_1 = document.querySelectorAll(".js-txt-tg_1"),
    txt_tg_2 = document.querySelectorAll(".js-txt-tg_2");

let currentY;
let fireTxt_1 = true,
    fireTxt_2 = true;

let StopMnS = false;
let StopFmTs = false;

function txtUp_2(j) {
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

function txtUp_1(z) {
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
            StopMnS = false;
            MnS_load(0);
            setTimeout(() => {
                txtUp_1(0);
            }, 3000);
        }
    } else if (fireTxt_1 == false) {
        if (currentY <= trg_1.offsetTop - 320 || currentY >= trg_1.offsetTop + trg_1.offsetHeight) {
            StopMnS = true;
            txtReset_1();
            MnS_Reset();
        }
    }

    if (fireTxt_2 == true) {
        if (currentY >= trg_2.offsetTop - 320 && currentY <= trg_2.offsetTop + trg_2.offsetHeight) {
            StopFmTs = false;
            FmTs_Load(0);
            txtUp_2(0);
        }
    } else if (fireTxt_2 == false) {
        if (currentY <= trg_2.offsetTop - 320 || currentY >= trg_2.offsetTop + trg_2.offsetHeight) {
            StopFmTs = true;
            txtReset_2();
            FmTs_Reset();
        }
    }
}

function txtReset_2() {
    fireTxt_2 = true;
    for (let i = 0; i < txt_tg_2.length; i++) {
        txt_tg_2[i].classList.remove("txt_after");
        txt_tg_2[i].classList.add("txt_before");
    }
}

function txtReset_1() {
    fireTxt_1 = true;
    for (let i = 0; i < txt_tg_1.length; i++) {
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
        MnS_gradation(0);
    }, 1000);
}

const MnS_Reset = () => {
    StopMnS = true;
    MnS_rect.style.setProperty(`transform`, `scale(0.6)`);
    MnS_rect.style.setProperty(`opacity`, `0`);
    MnS_cir.style.setProperty(`transform`, `scale(0.4)`);
    MnS_cir.style.setProperty(`opacity`, `0`);
    MnS_grd.children[1].setAttribute(`points`, `0,272 272,0 272,0 0,272`);
}

const MnS_gradation = (g) => {
    setTimeout(() => {
        if (g <= 256) {
            // 0,272 272,0 272,0 0,272
            // 0,272 272,0 528,410 410,528
            if (StopMnS == true) {
                MnS_Reset();
            } else {
                let x = g;
                let y = 1.6 * g;
                MnS_grd.children[1].setAttribute(`points`, `0,272 272,0 ${272 + x},${y} ${y},${272 + x}`);
                g = g + 2;
                MnS_gradation(g);
            }
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

const FmTs_Load = (o) => {
    if (StopFmTs == true) {
        FmTs_Reset();
    } else {
        setTimeout(function () {
            FmTs[o].style.setProperty(`transform`, `scale(1.0)`);
            FmTs[o].style.setProperty(`opacity`, `1.0`);
            o++;
            if (o < FmTs.length) {
                FmTs_Load(o);
            } else {
                // console.log(`i is ${o}, Fmts.lenght is ${FmTs.length}`);
                o = 0;
            }
        }, 300);
    }
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