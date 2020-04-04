const txtObj = document.querySelectorAll(".js-text_pre");

const btn_start_txtIx = document.querySelector("#js-btn_4"),
    btn_reset_txtIx = document.querySelector("#js-btn_5");

let i;
let a = 0;
let b = txtObj.length - 1;

function txtIxReset() {
    txtIxLoadOut();
    if (b >= 0) {
        setTimeout(function () {
            txtObj[b].style.setProperty("transform", "translateY(176px) rotateX(180deg) scale(0.6)");
            txtObj[b].style.setProperty("opacity", "0.1");
            b--;
            txtIxReset(b);
        }, 16);
    } else if (b < 0) {
        b = txtObj.length - 1;
        btn_start_txtIx.addEventListener("click", txtIxQue);
        btn_start_txtIx.addEventListener("mouseover", txtHover);
        btn_start_txtIx.addEventListener("mouseleave", txtUnHover);
    }
}

function txtIxQue() {
    if (a < txtObj.length) {
        setTimeout(function () {
            txtObj[a].style.setProperty("transform", "translateY(0) rotateX(0) scale(1.0)");
            txtObj[a].style.setProperty("opacity", "1.0");
            a++;
            txtIxQue(a);
        }, 16);
    } else if (a === txtObj.length) {
        a = 0;
        txtIxLoadIn();
        btn_start_txtIx.removeEventListener("click", txtIxQue);
        btn_start_txtIx.removeEventListener("mouseover", txtHover);
        btn_start_txtIx.removeEventListener("mouseleave", txtUnHover);
        btn_start_txtIx.style.setProperty("background-color", "rgba(47, 117, 255, 1.0)");
        btn_start_txtIx.style.setProperty("cursor", "");

        btn_reset_txtIx.addEventListener("click", txtIxReset);
        btn_reset_txtIx.addEventListener("mouseover", txtHover);
        btn_reset_txtIx.addEventListener("mouseleave", txtUnHover);
    }
}

function txtIxLoadOut() {
    i = 0;
    for (i = 0; i < txtObj.length; i++) {
        txtObj[i].style.setProperty("-webkit-transition", "opacity 350ms ease-out, transform 800ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txtObj[i].style.setProperty("-moz-transition", "opacity 350ms ease-out, transform 800ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txtObj[i].style.setProperty("-o-transition", "opacity 350ms ease-out, transform 800ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txtObj[i].style.setProperty("transition", "opacity 350ms ease-out, transform 800ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
    }
}


function txtIxLoadIn() {
    i = 0;
    for (i = 0; i < txtObj.length; i++) {
        txtObj[i].style.setProperty("-webkit-transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txtObj[i].style.setProperty("-moz-transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txtObj[i].style.setProperty("-o-transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
        txtObj[i].style.setProperty("transition", "opacity 1000ms ease 100ms, transform 1000ms cubic-bezier(0, 0.7, 0.29, 0.97) 100ms");
    }
}

function txtHover() {
    this.style.setProperty("cursor", "pointer");
    if (this === btn_start_txtIx) {
        this.style.setProperty("background-color", "rgba(47, 117, 255, 0.8)");
    } else {
        this.style.setProperty("background-color", "rgba(47, 117, 255, 0.2)");
    }
}

function txtUnHover() {
    if (this === btn_start_txtIx) {
        this.style.setProperty("background-color", "rgba(47, 117, 255, 0.8)");
    } else {
        this.style.setProperty("background-color", "rgba(47, 117, 255, 0.1)");
    }
}

function init() {
    for (i = 0; i < txtObj.length; i++) {
        txtObj[i].style.setProperty("transform", "translateY(176px) rotateX(180deg) scale(0.6)");
        txtObj[i].style.setProperty("opacity", "0.1");
    }
    txtIxLoadIn();
    btn_start_txtIx.addEventListener("click", txtIxQue);
    btn_start_txtIx.addEventListener("mouseover", txtHover);
    btn_start_txtIx.addEventListener("mouseleave", txtUnHover);
}

init();