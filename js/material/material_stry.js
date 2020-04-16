const stry_txt_1 = document.querySelector("#js-stry-txt-1"),
    stry_txt_2 = document.querySelector("#js-stry-txt-2");

const ran_txt = [`a`, `!`, `b`, `#`, `3`, `j`, `d`, `t`, `*`, `e`, `$`, `i`];

const M_arry = [`Process.`, `Background.`, `Research.`, `Subject.`, `Sketch.`, `Prototype.`, `Testing.`];

const S_arry = [`Design.`, `Product.`, `Service.`, `Experience.`, `Development.`, `Purpose.`, `Business.`];

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
    }, 72);

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
                setTimeout(() => {
                    if (b === M_arry.length - 1) {
                        txt_change(0, 0, c);
                    } else {
                        txt_change(n, b + 1, c);
                    }
                }, 800);
            }
        }, 500 - (`${v * 100 > 400 ? 400 : `${v * 100}` }`));
    } else {
        setTimeout(() => {
            if (stry_txt_2.hasChildNodes()) {
                stry_txt_2.removeChild(stry_txt_2.lastChild);
                v++;
                del_txt(v, n, b, c);
            } else {
                v = 0;
                clearTimeout();
                setTimeout(() => {
                    if (b === M_arry.length - 1) {
                        txt_change(0, 0, c);
                    } else {
                        txt_change(n, b + 1, c);
                    }
                }, 800);
            }
        }, 500 - (`${v * 100 > 400 ? 400 : `${v * 100}` }`));
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
                n = 0;
                setTimeout(() => {
                    del_txt(0, n, b, c);
                }, 2500);
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
                n = 0;
                setTimeout(() => {
                    del_txt(0, n, b, c);
                }, 2500);
            }
        }, 48);
    }

}

function init() {
    txt_change(0, 0, `Mtxt`);
    setTimeout(() => {
        txt_change(0, 0, `Stxt`);
    }, 1000);
}

init();