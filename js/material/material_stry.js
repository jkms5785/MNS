const stry_txt = document.querySelector("#js-stry-txt");

const random_txt = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];

const M_arry = [`Process`, `Research`, `Interview`, `Persona`, `sketch`, `Prototype`, `User Test`];

const M_txt = [];

// let k = 0;
const txt_a_z = (a) => {
    setTimeout(() => {
        if (a < random_txt.length) {
            a++;
            txt_a_z(a);
            return console.log(random_txt[a]);
        } else {
            a = 0;
            console.log(`end`);
        }
    }, 80);
}

console.log(txt_a_z(10));

const stry_txt_make = (a) => {
    const create_txt = document.createElement(`span`);
    // create_txt.innerHTML = `${txt_a_z}`;
    stry_txt.appendChild(create_txt);
}

let s = 0;

const stry_txt_change = () => {
    setTimeout(() => {
        if (s <= M_arry[0].length) {
            stry_txt_make(s);
            s++;
            stry_txt_change(s);
        } else {
            s = 0;
        }
    }, 80);
}

stry_txt_change();

function init() {
    stry_txt.style.setProperty(`opacity`, `0.3`);
    // stry_txt.style.setProperty(`-webkit-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    // stry_txt.style.setProperty(`-moz-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    // stry_txt.style.setProperty(`-o-transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    // stry_txt.style.setProperty(`transition`, `all 400ms cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    // stry_txt.style.setProperty(`-webkit-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    // stry_txt.style.setProperty(`-moz-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    // stry_txt.style.setProperty(`-o-transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);
    // stry_txt.style.setProperty(`transition-timing-function`, `cubic-bezier(0.200, -0.135, 0.125, 1.500)`);

    setTimeout(function () {
        stry_txt.style.setProperty(`opacity`, `1.0`);
    }, 1000);
}

init();