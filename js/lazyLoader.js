const preloader = document.getElementById("js-preloader");
const header = document.querySelector("header");

const thumnbnail = document.querySelector("#js-thumbnail");

function headerLoader() {
    header.classList.remove("header_preloader");
    header.classList.add("header_loader");
}

function preloaderOut() {
    setTimeout(function () {
        preloader.style.height = "0";
        headerLoader();
    }, 1000);
}

function profileLoader() {
    // profileCont.classList.remove("photo_preloader");
    // profileCont.classList.add("photo_loader");
}

function preloaderIn() {
    preloader.style.top = "0";
    const img = document.createElement("img");
    thumnbnail.appendChild(img);
    console.dir(thumnbnail);
    thumnbnail.children[0].src = "https://jkms5785.github.io/MaterialAndSolution/img/muto_source/muto_thumbnail.png";
    // img.src = "https://jkms5785.github.io/MaterialAndSolution/img/muto_source/muto_thumbnail.png";
    // img.alt = "muto-thumbanil";
    // insertImg.id = "profileLoaded";
    // const profileImg = document.querySelector("#profileLoaded");

    thumnbnail.children[0].onload = function () {
        setTimeout(function () {
            preloader.style.top = "200%";
            preloaderOut();
        }, 1000);
    }
}

function init() {
    setTimeout(function () {
        preloaderIn();
    }, 1000);
}

init();