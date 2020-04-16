const FmTs_ani = document.querySelectorAll(`.js-FmTs-ani`);
const FmTs_svg = document.querySelector(`#js-FmTs-svg`),
    FmTs_cir = document.querySelector("#js-FmTs-cir");

const FmTs_ToCirArry = [];
let FmTs_check = false;

const FmTs_CirPop = () => {
    FmTs_cir.classList.add(`Circle`);
    FmTs_svg.style.setProperty(`opacity`, `0`);
    let y = 0;
    let borderRadius = setInterval(function () {
        y++;
        FmTs_cir.style.borderRadius = y + '%';
        if (y === 100) {
            clearInterval(borderRadius);
        }
    }, 5);

    FmTs_cir.classList.add(`CirclePop`);
    window.addEventListener(`scroll`, FmTsQue);
}

const FmTs_ToCir = (i) => {
    if (i < 4) {
        setTimeout(() => {
            FmTs_ToCirArry[i].beginElement();
            i++;
            FmTs_ToCir(i);
        }, 150);
    } else {
        i = 0;
        setTimeout(() => {
            FmTs_CirPop();
        }, 750)
    }
}

const FmTs_svgLoad = () => {
    FmTs_ani[0].parentElement.setAttribute(`points`, `220 0 220 220 0 220 0 0`);

    for (let i = 0; i < FmTs_ani.length; i++) {
        FmTs_ani[i].setAttribute(`begin`, `indefinite`);
        FmTs_ani[i].setAttribute(`fill`, `freeze`);
        FmTs_ani[i].setAttribute(`attributeName`, `points`);
    }

    FmTs_ani[0].setAttribute(`to`, `220 0 220 220 0 220 40 40`);
    FmTs_ani[0].setAttribute(`dur`, `500ms`);

    FmTs_ani[1].setAttribute(`to`, `180 40 220 220 0 220 40 40`);
    FmTs_ani[1].setAttribute(`dur`, `400ms`);

    FmTs_ani[2].setAttribute(`to`, `180 40 180 180 0 220 40 40`);
    FmTs_ani[2].setAttribute(`dur`, `300ms`);

    FmTs_ani[3].setAttribute(`to`, `180 40 180 180 40 180 40 40`);
    FmTs_ani[3].setAttribute(`dur`, `200ms`);

    FmTs_ani[4].setAttribute(`to`, `220 0 220 220 0 220 0 0`);
    FmTs_ani[4].setAttribute(`dur`, `300ms`);

    for (let i = 0; i < FmTs_ani.length; i++) {
        FmTs_ToCirArry.push(FmTs_ani[i]);
    }
}

FmTs_svgLoad();

const FmTs_QueSign = document.querySelector("#js-FmTs-Que");

const FmTs_CirReset = () => {
    FmTs_cir.style.borderRadius = `0`;
    FmTs_cir.classList.remove(`CirclePop`);
    FmTs_cir.classList.remove(`Circle`);
    FmTs_svg.style.setProperty(`opacity`, `1.0`);
    FmTs_ToCirArry[4].beginElement();
}

const FmTsQue = () => {
    let Y = parseInt(window.scrollY);
    let QueSign_Top = FmTs_QueSign.offsetTop;
    if (Y > QueSign_Top - 320 && Y < QueSign_Top + FmTs_QueSign.offsetHeight) {
        if (FmTs_check == false) {
            FmTs_check = true;
            window.removeEventListener(`scroll`, FmTsQue);
            setTimeout(() => {
                console.log(`que`);
                FmTs_ToCir(0);
            }, 500);
        }
    } else {
        if (FmTs_check == true) {
            FmTs_check = false;
            console.log(`reset`);
            FmTs_CirReset(0);
        }
    }
}

window.addEventListener(`scroll`, FmTsQue);