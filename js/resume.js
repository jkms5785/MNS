const resumeParent = document.querySelector("body");
const resume = document.querySelector("#js-resume");

const makeModal = document.createElement("div"),
    modalTitle = document.createElement("div"),
    modalText = document.createElement("div"),
    btn_kr = document.createElement("div"),
    btn_en = document.createElement("div"),
    btn_close = document.createElement("div"),
    icon_close = document.createElement("img");

const resumeBack = document.createElement("div");
const pulseCursor = document.createElement("div");

let nonbubble = true;

function closeUnHovered() {
    this.parentElement.style.backgroundColor = "";
}

function closeHovered() {
    this.parentElement.style.backgroundColor = "#F2F2F2";
}

function deleteCursor(d) {
    setTimeout(() => {
        d.removeChild(d.children[0]);
        pulseCursor.setAttribute("style", "");
        nonbubble = true;
    }, 750);
}

function makeCursor(b, c, d) {

    let pulseX = b - 25,
        pulseY = c - 25;

    pulseCursor.setAttribute("style", `width : 50px; height : 50px; position : absolute; background-color : #2F75FF; border-radius : 50%; transform-origin : center ; opacity : 0.25;`);

    pulseCursor.style.webkitTransition = "all 400ms ease-in-out";
    pulseCursor.style.mozTransition = "all 400ms ease-in-out";
    pulseCursor.style.oTransition = "all 400ms ease-in-out";
    pulseCursor.style.transition = "all 400ms ease-in-out";

    pulseCursor.style.webkitTransitionTimingFunction = "ease-in-out";
    pulseCursor.style.mozTransitionTimingFunction = "ease-in-out";
    pulseCursor.style.oTransitionTimingFunction = "ease-in-out";
    pulseCursor.style.transitionTimingFunction = "ease-in-out";


    pulseCursor.id = "js-btn-cursor";
    d.appendChild(pulseCursor);

    setTimeout(() => {
        pulseCursor.style.transform = "scale(12.5)";
        pulseCursor.style.opacity = "0";
        pulseCursor.style.left = `${pulseX}px`
        pulseCursor.style.top = `${pulseY}px`
        deleteCursor(d);
    }, 100);
}


function linkTo(a) {
    if (a === "KR") {
        window.open("https://drive.google.com/open?id=1l3qbS_h8EUfnO3W2e1pouTjwd2R6thiN", "MOONSOOKIM_resume_kr");
    } else {
        window.open("https://drive.google.com/open?id=1iAlDS2tMk1Yy4iCNomDS_dGAES3S3tzx", "MOONSOOKIM_resume_en");
    }
}

function btnClicked(e) {
    e.preventDefault();
    if (nonbubble === true) {
        nonbubble = false;
        makeCursor(e.offsetX, e.offsetY, e.target);
        setTimeout(() => {
            linkTo(e.target.id);
        }, 400);
    } else {
        console.log(`bubble`);
    }
}

function btnUnHovered() {
    this.style.opacity = "0.6";
    this.style.color = "";
    this.style.border = "1px solid #676767";
}

function btnHovered() {
    this.style.opacity = "1.0";
    this.style.color = "#2F75FF";
    this.style.border = "1px solid #2F75FF";
}

function ResumeModalActive() {
    resumeBack.style.height = "100vh";
    setTimeout(() => {
        makeModal.style.top = "50%";
        makeModal.style.opacity = "1.0";
    }, 500);
}

function ResumeModalClosed() {
    makeModal.style.top = "32%";
    makeModal.style.opacity = "0";
    setTimeout(() => {
        resumeBack.style.height = "0";
    }, 500);
}

function makeResumeModal() {
    resumeParent.appendChild(resumeBack);
    resumeBack.id = "js-modal-back";
    resumeBack.style.backgroundColor = "#000000";
    resumeBack.style.opacity = "0.6";
    resumeBack.style.width = "100vw";
    resumeBack.style.height = "0";
    resumeBack.style.position = "fixed";
    resumeBack.style.top = "0";
    resumeBack.style.left = "0";
    resumeBack.style.cursor = "pointer";
    resumeBack.style.zIndex = "2000";

    resumeBack.style.webkitTransition = "all 500ms cubic-bezier(0.000, 0.000, 0.165, 1)";
    resumeBack.style.mozTransition = "all 500ms cubic-bezier(0.000, 0.000, 0.165, 1)";
    resumeBack.style.oTransition = "all 500ms cubic-bezier(0.000, 0.000, 0.165, 1)";
    resumeBack.style.transition = "all 500ms cubic-bezier(0.000, 0.000, 0.165, 1)";

    resumeBack.style.webkitTransitionTimingFunction = "cubic-bezier(0.000, 0.000, 0.165, 1)";
    resumeBack.style.mozTransitionTimingFunction = "cubic-bezier(0.000, 0.000, 0.165, 1)";
    resumeBack.style.oTransitionTimingFunction = "cubic-bezier(0.000, 0.000, 0.165, 1)";
    resumeBack.style.transitionTimingFunction = "cubic-bezier(0.000, 0.000, 0.165, 1)";

    resumeParent.appendChild(makeModal);
    makeModal.id = "js-modal";
    makeModal.style.width = "410px";
    makeModal.style.height = "308px";
    makeModal.style.backgroundColor = "#FFFFFF";
    makeModal.style.opacity = "0";
    makeModal.style.borderRadius = "4px";
    makeModal.style.position = "fixed";
    makeModal.style.top = "32%";
    makeModal.style.left = "50%";
    makeModal.style.transform = "translate(-50%, -50%)";
    makeModal.style.boxSizing = "border-box";
    makeModal.style.padding = "40px 0";
    makeModal.style.zIndex = "9990";

    makeModal.style.webkitTransition = "all 350ms ease-in-out";
    makeModal.style.mozTransition = "all 350ms ease-out";
    makeModal.style.oTransition = "all 350ms ease-out";
    makeModal.style.transition = "all 350ms ease-out";

    makeModal.style.webkitTransitionTimingFunction = "ease-out";
    makeModal.style.mozTransitionTimingFunction = "ease-out";
    makeModal.style.oTransitionTimingFunction = "ease-out";
    makeModal.style.transitionTimingFunction = "ease-out";

    let modal = document.querySelector("#js-modal");

    modal.appendChild(modalTitle);
    modalTitle.innerHTML = "Choose Language";
    modalTitle.style.fontFamily = "'Montserrat', sans-serif";
    modalTitle.style.fontWeight = "700";
    modalTitle.style.lineHeight = "24px";
    modalTitle.style.color = "#2F75FF";
    modalTitle.style.fontSize = "1.25rem";
    modalTitle.style.textAlign = "center";

    modal.appendChild(modalText);
    modalText.innerHTML = "Please choose your preferred language";
    modalText.style.fontFamily = "'Open Sans', sans-serif";
    modalText.style.fontWeight = "400";
    modalText.style.lineHeight = "24px";
    modalText.style.fontSize = "1rem";
    modalText.style.opacity = "0.6";
    modalText.style.textAlign = "center";
    modalText.style.marginTop = "24px";

    modal.appendChild(btn_kr);
    btn_kr.innerHTML = "Korean";
    btn_kr.id = "KR";
    btn_kr.style.fontFamily = "'Montserrat', sans-serif";
    btn_kr.style.fontWeight = "500";
    btn_kr.style.fontSize = "1rem";
    btn_kr.style.lineHeight = "44px";
    btn_kr.style.opacity = "0.6";
    btn_kr.style.border = "1px solid #676767";
    btn_kr.style.borderRadius = "4px";
    btn_kr.style.width = "286px";
    btn_kr.style.height = "44px";
    btn_kr.style.margin = "0 auto";
    btn_kr.style.textAlign = "center";
    btn_kr.style.marginTop = "52px";
    btn_kr.style.cursor = "pointer";
    btn_kr.style.position = "relative";
    btn_kr.style.overflow = "hidden";

    modal.appendChild(btn_en);
    btn_en.innerHTML = "English";
    btn_en.id = "EN";
    btn_en.style.fontFamily = "'Montserrat', sans-serif";
    btn_en.style.fontWeight = "500";
    btn_en.style.fontSize = "1rem";
    btn_en.style.lineHeight = "44px";
    btn_en.style.opacity = "0.6";
    btn_en.style.border = "1px solid #676767";
    btn_en.style.borderRadius = "4px";
    btn_en.style.width = "286px";
    btn_en.style.height = "44px";
    btn_en.style.margin = "0 auto";
    btn_en.style.textAlign = "center";
    btn_en.style.marginTop = "12px";
    btn_en.style.cursor = "pointer";
    btn_en.style.position = "relative";
    btn_en.style.overflow = "hidden";

    modal.appendChild(btn_close);
    btn_close.style.width = "32px";
    btn_close.style.height = "32px";
    btn_close.style.position = "absolute";
    btn_close.style.right = "24px";
    btn_close.style.top = "24px";
    btn_close.style.borderRadius = "16px";
    btn_close.style.cursor = "pointer";
    btn_close.style.display = "flex";
    btn_close.style.justifyContent = "center";
    btn_close.style.alignItems = "center";
    btn_close.style.transition = "all 300ms cubic-bezier(0.000, 0.000, 0.580, 1.000)";

    btn_close.appendChild(icon_close);
    icon_close.src = "img/resume_modal_cancel.png";
    icon_close.style.width = "32px";

    btn_kr.addEventListener("mouseover", btnHovered);
    btn_en.addEventListener("mouseover", btnHovered);
    btn_kr.addEventListener("mouseleave", btnUnHovered);
    btn_en.addEventListener("mouseleave", btnUnHovered);
    btn_kr.addEventListener("click", btnClicked);
    btn_en.addEventListener("click", btnClicked);
    icon_close.addEventListener("mouseover", closeHovered);
    icon_close.addEventListener("mouseleave", closeUnHovered);
    icon_close.addEventListener("click", ResumeModalClosed);
    resumeBack.addEventListener("click", ResumeModalClosed);
}

resume.addEventListener("click", ResumeModalActive);

makeResumeModal();