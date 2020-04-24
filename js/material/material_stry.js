const stry_txt_1 = document.querySelector("#js-stry-txt-1"),
    stry_txt_2 = document.querySelector("#js-stry-txt-2");

const ran_txt = [`a`, `b`, `#`, `j`, `d`, `*`, `e`, `i`];

const M_arry = [`Material`, `Process`, `Research`, `Sketch`, `Prototype`, `Testing`];

const S_arry = [`Solution`, `Design`, `Develop`, `Product`, `Experience`, `Business`];

const dash = document.querySelectorAll(`.js-stry-dash`);

const make_txt = (txt, c) => {
    const make_span = document.createElement(`span`);
    let i = 0;
    setInterval(() => {
        if (i < ran_txt.length - 1) {
            i++;
            make_span.innerHTML = `${ran_txt[i]}`;
            make_span.style.setProperty(`opacity`, `0.8`);
        } else {
            clearInterval();
            make_span.innerHTML = `${txt}`;
            make_span.style.setProperty(`opacity`, `1.0`);
        }
    }, 80);

    if (c === `Mtxt`) {
        stry_txt_1.appendChild(make_span);
    } else {
        stry_txt_2.appendChild(make_span);
    }
}

const del_txt = (v, n, b, c) => {
    if (c === `Mtxt`) {
        setTimeout(() => {
            if (stry_txt_1.hasChildNodes()) {
                stry_txt_1.removeChild(stry_txt_1.lastChild);
                v++;
                del_txt(v, n, b, c);
            } else {
                v = 0;
                clearTimeout();
                dash[0].classList.remove(`dash`);
                setTimeout(() => {
                    if (b === M_arry.length - 1) {
                        txt_change(0, 0, c);
                    } else {
                        txt_change(n, b + 1, c);
                    }
                }, 800);
            }
        }, 400 - (`${v * 100 > 300 ? 300 : `${v * 100}` }`));
    } else {
        setTimeout(() => {
            if (stry_txt_2.hasChildNodes()) {
                stry_txt_2.removeChild(stry_txt_2.lastChild);
                v++;
                del_txt(v, n, b, c);
            } else {
                v = 0;
                clearTimeout();
                dash[1].classList.remove(`dash`);
                setTimeout(() => {
                    if (b === M_arry.length - 1) {
                        txt_change(0, 0, c);
                    } else {
                        txt_change(n, b + 1, c);
                    }
                }, 800);
            }
        }, 400 - (`${v * 100 > 300 ? 300 : `${v * 100}` }`));
    }
}

const txt_change = (n, b, c) => {
    // n = 0 
    // b = 0
    if (c === `Mtxt`) {
        setTimeout(() => {
            if (n < M_arry[b].length) {
                make_txt(M_arry[b].substring(n, n + 1), c);
                // txt = M_arry[0].substring(0, 1) = P
                // txt = M_arry[1].substring(1, 2) = P
                n++;
                // n = 1
                txt_change(n, b, c);
                // txt_change(1, 0);
            } else {
                setTimeout(() => {
                    dash[0].classList.add(`dash`);
                }, 750);

                n = 0;
                setTimeout(() => {
                    del_txt(0, n, b, c);
                }, 1800);
            }
        }, 48);
    } else if (c === `Stxt`) {
        setTimeout(() => {
            if (n < S_arry[b].length) {
                make_txt(S_arry[b].substring(n, n + 1), c);
                // txt = M_arry[0].substring(0, 1) = P
                // txt = M_arry[1].substring(1, 2) = P
                n++;
                // n = 1
                txt_change(n, b, c);
                // txt_change(1, 0);
            } else {
                setTimeout(() => {
                    dash[1].classList.add(`dash`);
                }, 750);

                n = 0;
                setTimeout(() => {
                    del_txt(0, n, b, c);
                }, 1800);
            }
        }, 48);
    }

}

const stry_cont = document.querySelector(`#js-stry-cont`);
const stry_is = document.querySelectorAll(`.js-stry-is`);

const stry_que = () => {
    const Y = window.scrollY;
    if (Y > stry_cont.offsetTop - 240 && Y < stry_cont.offsetTop + (stry_cont.offsetHeight * 2) - 240) {
        window.removeEventListener(`scroll`, stry_que);

        stry_MS[0].style.setProperty(`transform`, `scale(1.0)`);
        stry_MS[0].style.setProperty(`opacity`, `1.0`);

        setTimeout(() => {
            stry_is[0].style.setProperty(`transform`, `scale(1.0)`);
            stry_is[0].style.setProperty(`opacity`, `1.0`);
            setTimeout(() => {
                txt_change(0, 0, `Mtxt`);
            }, 800);
        }, 200);


        setTimeout(() => {
            stry_MS[1].style.setProperty(`transform`, `scale(1.0)`);
            stry_MS[1].style.setProperty(`opacity`, `1.0`);
            setTimeout(() => {
                stry_is[1].style.setProperty(`transform`, `scale(1.0)`);
                stry_is[1].style.setProperty(`opacity`, `1.0`);
                setTimeout(() => {
                    txt_change(0, 0, `Stxt`);
                }, 800);
            }, 200)
        }, 400);
    }
}

const stry_MS = document.querySelectorAll(`.js-stry-MS`);

const stry_load = () => {
    stry_MS[0].style.setProperty(`transform`, `scale(0.6)`);
    stry_MS[0].style.setProperty(`opacity`, `0`);
    stry_MS[0].style.setProperty(`-webkit-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[0].style.setProperty(`-moz-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[0].style.setProperty(`-o-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[0].style.setProperty(`transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    stry_MS[0].style.setProperty(`-webkit-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[0].style.setProperty(`-moz-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[0].style.setProperty(`-o-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[0].style.setProperty(`transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    stry_MS[1].style.setProperty(`transform`, `scale(0.6)`);
    stry_MS[1].style.setProperty(`opacity`, `0`);
    stry_MS[1].style.setProperty(`-webkit-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[1].style.setProperty(`-moz-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[1].style.setProperty(`-o-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[1].style.setProperty(`transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    stry_MS[1].style.setProperty(`-webkit-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[1].style.setProperty(`-moz-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[1].style.setProperty(`-o-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_MS[1].style.setProperty(`transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    stry_is[0].style.setProperty(`transform`, `scale(0.6)`);
    stry_is[0].style.setProperty(`opacity`, `0`);
    stry_is[0].style.setProperty(`margin`, `0 16px`);
    stry_is[0].style.setProperty(`-webkit-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[0].style.setProperty(`-moz-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[0].style.setProperty(`-o-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[0].style.setProperty(`transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    stry_is[0].style.setProperty(`-webkit-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[0].style.setProperty(`-moz-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[0].style.setProperty(`-o-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[0].style.setProperty(`transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    stry_is[1].style.setProperty(`transform`, `scale(0.6)`);
    stry_is[1].style.setProperty(`opacity`, `0`);
    stry_is[1].style.setProperty(`margin`, `0 16px`);
    stry_is[1].style.setProperty(`-webkit-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[1].style.setProperty(`-moz-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[1].style.setProperty(`-o-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[1].style.setProperty(`transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    stry_is[1].style.setProperty(`-webkit-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[1].style.setProperty(`-moz-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[1].style.setProperty(`-o-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    stry_is[1].style.setProperty(`transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
}

stry_load();

window.addEventListener(`scroll`, stry_que);