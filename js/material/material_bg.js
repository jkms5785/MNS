const svg_cir_1 = document.querySelector("#js-bg-1"),
    svg_x = document.querySelector("#js-bg-2"),
    svg_cir_2 = document.querySelector("#js-bg-3");

const svg_path_1 = document.querySelector("#js-bg-1 path"),
    svg_path_2 = document.querySelectorAll("#js-bg-2 path"),
    svg_path_3 = document.querySelector("#js-bg-3 path");

const bg_title = document.querySelectorAll(".js-bg-title");

const bg_cont = document.querySelector("#js-bg-cont");

const svg_cleanPath = (a) => {
    if (a === `Rect`) {
        svg_path_3.setAttribute(`d`, `M172,0 L344,172 L172,344 L0,172 L172,0`);
    } else if (a === `Cir`) {
        svg_path_3.setAttribute(`d`, `M172,4
                        C172.77,4 340,171.22, 340,172 
                        C340,172.77 172.77,340, 172,340 
                        C171.22,340 4,172.77, 4,172 
                        C4,171.22 171.22,4, 172,4 
                        Z `);
    }
    svg_path_3.setAttribute(`stroke-width`, ``);
    svg_path_3.setAttribute(`stroke`, ``);
}

const svg2_morph = (a, b) => {
    if (b === `rect`) {
        setTimeout(() => {
            if (a < 93) {
                // 92.67
                svg_path_3.setAttribute(`d`, `M172,4
                        C${264.78 - a},4 340,${79.22 + a}, 340,172 
                        C340,${264.78 - a} ${264.78 - a},340, 172,340 
                        C${79.22 + a},340 4,${264.78 - a}, 4,172 
                        C4,${79.22 + a} ${79.22 + a},4, 172,4 
                        Z `);
                a++;
                svg2_morph(a, `rect`);
            } else {
                svg_cleanPath(`rect`);
                sperate_svg();
            }
        }, 10);
    } else if (b === `cir`) {
        setTimeout(() => {
            if (a < 93) {
                svg_path_3.setAttribute(`d`, `M172,4
                        C${172.77 + a},4 340,${171.22 - a}, 340,172 
                        C340,${171.77 + a} ${172.77 + a},340, 172,340 
                        C${171.22 - a},340 4,${172.77 + a}, 4,172 
                        C4,${171.22 - a} ${171.22 - a},4, 172,4 
                        Z `);
                a++;
                svg2_morph(a, `cir`);
            } else {
                svg_rotateScale();
            }
        }, 8);
    }
}

const moveToCenter_svg = (direction) => {
    setTimeout(() => {
        if (direction === 1 || direction === 2) {
            bg_title[1].parentElement.style.setProperty(`transform`, `translateX(-236px)`);
            bg_title[0].parentElement.style.setProperty(`transform`, `translateX(236px)`);
        } else if (direction === 3 || direction === 4) {
            bg_title[1].parentElement.style.setProperty(`transform`, `translate(-236px,0)`);
            bg_title[0].parentElement.style.setProperty(`transform`, `translate(236px,0)`);
        }

        svg_cir_2.style.setProperty(`transform`, `rotate(0deg) scale(0.6)`);
        svg_cir_1.style.setProperty(`transform`, `rotate(0deg) scale(0.7)`);

        svg_cleanPath(`cir`);
        svg2_morph(0, `cir`);
    }, 2000);
}

let beforeRanNum;

const geneRanNum = () => {
    let RanNum = Math.floor(Math.random() * (4 - 1 + 1) + 1);
    return RanNum;
}

const sperate_svg = () => {
    let direction = geneRanNum();
    setTimeout(() => {
        if (direction === 1) {
            bg_title[1].parentElement.style.setProperty(`transform`, `translateX(0px)`);
            bg_title[0].parentElement.style.setProperty(`transform`, `translateX(0px)`);
        } else if (direction === 2) {
            bg_title[1].parentElement.style.setProperty(`transform`, `translateX(-524px)`);
            bg_title[0].parentElement.style.setProperty(`transform`, `translateX(524px)`);
        } else if (direction === 3) {
            bg_title[1].parentElement.style.setProperty(`transform`, `translate(-236px,-288px)`);
            bg_title[0].parentElement.style.setProperty(`transform`, `translate(236px,288px)`);
        } else if (direction === 4) {
            bg_title[1].parentElement.style.setProperty(`transform`, `translate(-236px,288px)`);
            bg_title[0].parentElement.style.setProperty(`transform`, `translate(236px,-288px)`);
        }
        moveToCenter_svg(direction);
    }, 1000);
}

const svg_rotateScale = () => {
    setTimeout(() => {
        svg_cir_2.style.setProperty(`transform`, `rotate(405deg) scale(1.2)`);
        svg_cir_1.style.setProperty(`transform`, `rotate(0deg) scale(1.0)`);

        svg_path_1.setAttribute(`d`, `M172,36
                        C247.11,36 308,96.89, 308,172 
                        C308,247.11 247.11,308, 172,308 
                        C96.89,304 36,247.11, 36,172 
                        C36,96.89 96.89,36 172,36 
                        Z `);
        svg_path_1.setAttribute(`stroke-width`, ``);
        svg_path_1.setAttribute(`stroke`, ``);
        svg_cir_1.setAttribute(`fill`, `#2F75FF`);

        svg2_morph(0, `rect`);
    }, 1000);
}

const del_bg_txt = (a) => {
    if (bg_title[a].hasChildNodes()) {
        bg_title[a].removeChild(bg_title[a].lastChild);
        del_bg_txt(a);
    }
}

const moveToCenter_once = () => {
    bg_title[0].parentElement.style.setProperty(`transform`, `translateX(236px)`);
    bg_title[1].parentElement.style.setProperty(`transform`, `translateX(-236px)`);

    for (let i = 0; i < bg_title[0].children.length; i++) {
        bg_title[0].children[i].classList.add('bg_txt_fadeOut');
    }

    for (let i = 0; i < bg_title[1].children.length; i++) {
        bg_title[1].children[i].classList.add('bg_txt_fadeOut');
    }

    setTimeout(() => {
        del_bg_txt(0);
        del_bg_txt(1);
    }, 1000);

    svg_rotateScale();
}

const x_up = () => {
    svg_x.style.setProperty(`animation`, `x_up 400ms ease-in forwards`);
    setTimeout(() => {
        moveToCenter_once();
    }, 750);
}

const bg_title_que = (a, b) => {
    setTimeout(() => {
        if (a < bg_title[b].children.length) {
            bg_title[b].children[a].classList.remove('bg_txt_before');
            bg_title[b].children[a].classList.add('bg_txt_after');
            a++;
            bg_title_que(a, b);
        } else {
            setTimeout(() => {
                a = 0;
                if (b < 1) {
                    bg_title_que(a, b + 1);
                } else {
                    setTimeout(() => {
                        x_up();
                    }, 500);
                    // start main animation 
                }
            }, 500);
        }
    }, 16);
}

const bg_txt_load = () => {
    const P_identity = `MOONSOO KIM`,
        D_identity = `Design Identity`;

    for (let i = 0; i < P_identity.length; i++) {
        const span = document.createElement(`span`);
        span.classList.add(`bg_txt_before`);
        span.innerHTML = `${P_identity.substring(i, i + 1)}`;
        bg_title[0].appendChild(span);

        if (i === 7) {
            const space = document.createTextNode(`\u00A0`);
            bg_title[0].children[6].appendChild(space);
        }
    }

    for (let i = 0; i < D_identity.length; i++) {
        const span = document.createElement(`span`);
        span.classList.add(`bg_txt_before`);
        span.innerHTML = `${D_identity.substring(i, i + 1)}`;
        bg_title[1].appendChild(span);

        if (i === 5) {
            const space = document.createTextNode(`\u00A0`);
            bg_title[1].children[5].appendChild(space);
        }
    }
}

const bg_load = () => {
    svg_cir_1.setAttribute(`width`, `344px`);
    svg_cir_1.setAttribute(`height`, `344px`);
    svg_cir_1.setAttribute(`fill`, `none`);
    svg_cir_1.setAttribute(`version`, `1.1`);
    svg_cir_1.setAttribute(`xmlns`, `http://www.w3.org/2000/svg`);

    svg_path_1.style.setProperty(`stroke-dasharray`, `1055.7169189453125`);
    svg_path_1.style.setProperty(`stroke-dashoffset`, `1055.7169189453125`);
    svg_path_1.setAttribute(`stroke`, `#2F75FF`);
    svg_path_1.setAttribute(`stroke-width`, `4`);

    svg_cir_2.setAttribute(`width`, `344px`);
    svg_cir_2.setAttribute(`height`, `344px`);
    svg_cir_2.setAttribute(`fill`, `none`);
    svg_cir_2.setAttribute(`version`, `1.1`);
    svg_cir_2.setAttribute(`xmlns`, `http://www.w3.org/2000/svg`);

    svg_path_3.style.setProperty(`stroke-dasharray`, `1055.7169189453125`);
    svg_path_3.style.setProperty(`stroke-dashoffset`, `1055.7169189453125`);
    svg_path_3.setAttribute(`stroke`, `#2F75FF`);
    svg_path_3.setAttribute(`stroke-width`, `4`);

    svg_x.setAttribute(`width`, `48px`);
    svg_x.setAttribute(`height`, `48px`);
    svg_x.setAttribute(`fill`, `none`);
    svg_x.setAttribute(`version`, `1.1`);
    svg_x.setAttribute(`xmlns`, `http://www.w3.org/2000/svg`);

    svg_path_2[0].style.setProperty(`stroke-dasharray`, `56.56854248046875`);
    svg_path_2[0].style.setProperty(`stroke-dashoffset`, `56.56854248046875`);
    svg_path_2[0].setAttribute(`stroke`, `#2F75FF`);
    svg_path_2[0].setAttribute(`stroke-width`, `4`);

    svg_path_2[1].style.setProperty(`stroke-dasharray`, `56.56854248046875`);
    svg_path_2[1].style.setProperty(`stroke-dashoffset`, `56.56854248046875`);
    svg_path_2[1].setAttribute(`stroke`, `#2F75FF`);
    svg_path_2[1].setAttribute(`stroke-width`, `4`);

    bg_title[0].parentElement.style.setProperty("-webkit-transition", "all 500ms ease");
    bg_title[0].parentElement.style.setProperty("-moz-transition", "all 500ms ease");
    bg_title[0].parentElement.style.setProperty("-o-transition", "all 500ms ease");
    bg_title[0].parentElement.style.setProperty("transition", "all 500ms ease");

    bg_title[1].parentElement.style.setProperty("-webkit-transition", "all 500ms ease");
    bg_title[1].parentElement.style.setProperty("-moz-transition", "all 500ms ase");
    bg_title[1].parentElement.style.setProperty("-o-transition", "all 500ms ease");
    bg_title[1].parentElement.style.setProperty("transition", "all 500ms ease");

    svg_cir_1.style.setProperty("-webkit-transition", "all 750ms ease");
    svg_cir_1.style.setProperty("-moz-transition", "all 750ms ease");
    svg_cir_1.style.setProperty("-o-transition", "all 750ms ease");
    svg_cir_1.style.setProperty("transition", "all 750ms ease");

    svg_cir_2.style.setProperty("-webkit-transition", "all 750ms ease");
    svg_cir_2.style.setProperty("-moz-transition", "all 750ms ease");
    svg_cir_2.style.setProperty("-o-transition", "all 750ms ease");
    svg_cir_2.style.setProperty("transition", "all 750ms ease");
}

const bg_ani_que = () => {
    const scrollY = parseInt(window.scrollY);

    if (scrollY > bg_cont.offsetTop - 160 && scrollY < bg_cont.offsetTop + bg_cont.offsetHeight) {
        window.removeEventListener(`scroll`, bg_ani_que);
        svg_path_1.style.setProperty(`animation`, `drawingPath 1s ease forwards`);
        svg_path_2[0].style.setProperty(`animation`, `drawingPath 200ms ease forwards`);
        setTimeout(() => {
            svg_path_2[1].style.setProperty(`animation`, `drawingPath 200ms ease forwards`);
            svg_path_3.style.setProperty(`animation`, `drawingPath 1s ease forwards`);
            setTimeout(() => {
                svg_cir_2.style.setProperty(`animation`, `fillPath 0.3s ease forwards`);
                svg_cir_2.setAttribute(`fill`, `#2F75FF`);
                bg_title_que(0, 0);
            }, 750);
        }, 500);

    }
}

bg_load();
bg_txt_load();

window.addEventListener(`scroll`, bg_ani_que);