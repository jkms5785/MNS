const loader = document.querySelector("#js-loader");

const btn_start_loader = document.querySelector("#js-btn_3");

function origin() {
    loader.style.transform = "translateY(-101%)";
    btn_start_loader.addEventListener("click", loaderDown);
}

function reset() {
    loader.style.setProperty("-webkit-transition", "");
    loader.style.setProperty("-moz-transition", "");
    loader.style.setProperty("-o-transition", "");
    loader.style.setProperty("transition", "");

    loader.style.setProperty("-webkit-transition-timing-function", "");
    loader.style.setProperty("-moz-transition-timing-function", "");
    loader.style.setProperty(" -o-transition-timing-function", "");
    loader.style.setProperty("transition-timing-function", "");
    setTimeout(function () {
        origin();
    }, 500);
}

function load() {
    loader.style.setProperty("-webkit-transition", "all 500ms cubic-bezier(0.675, 0.005, 0.470, 1)");
    loader.style.setProperty("-moz-transition", "all 500ms cubic-bezier(0.675, 0.005, 0.470, 1)");
    loader.style.setProperty("-o-transition", "all 500ms cubic-bezier(0.675, 0.005, 0.470, 1)");
    loader.style.setProperty("transition", "all 500ms cubic-bezier(0.675, 0.005, 0.470, 1)");
    loader.style.setProperty("-webkit-transition-timing-function", "cubic-bezier(0.675, 0.005, 0.470, 1.005)");
    loader.style.setProperty("-moz-transition-timing-function", "cubic-bezier(0.675, 0.005, 0.470, 1.005)");
    loader.style.setProperty(" -o-transition-timing-function", "cubic-bezier(0.675, 0.005, 0.470, 1.005)");
    loader.style.setProperty("transition-timing-function", "cubic-bezier(0.675, 0.005, 0.470, 1.005)");
}

function loaderDown() {
    load();
    btn_start_loader.removeEventListener("click", loaderDown);
    loader.style.transform = "translateY(0)";
    setTimeout(function () {
        loader.style.transform = "translateY(101%)";
        setTimeout(function () {
            reset();
        }, 600);
    }, 1000);
}

function laoderHover() {
    this.style.setProperty("background-color", "rgba(47, 117, 255, 0.8)")
    this.style.setProperty("cursor", "pointer");
}

function laoderUnHover() {
    this.style.setProperty("background-color", "rgba(47, 117, 255, 1.0)")
}

function init() {
    btn_start_loader.addEventListener("mouseover", laoderHover);
    btn_start_loader.addEventListener("mouseleave", laoderUnHover);
    btn_start_loader.addEventListener("click", loaderDown);
}

init();