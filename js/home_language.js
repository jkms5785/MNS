const bodyLang_btn = document.querySelector("body");
const lang = document.querySelector("#js-lang");
const make_btn = document.createElement("div");
const make_text = document.createElement("div");

const preloaderQue = document.querySelector("#js-preloader");

function langHover() {
    make_btn.style.backgroundColor = "rgba(47,117,255,0.6)";
}

function langUnHover() {
    make_btn.style.backgroundColor = "rgba(47,117,255,0.8)";
}

function langClick() {
    if (make_text.innerHTML === "EN") {
        make_btn.style.borderRadius = "100%";
        make_btn.style.transform = "rotate( 0deg )";
        lang.style.fontFamily = "";
        lang.style.fontWeight = "";
        lang.style.lineHeight = "";
        lang.style.letterSpacing = "";
        lang.innerHTML = "Hi, I’m MOONSOO KIM. a UX design student from Seoul. Material and Soultion is my portfolio which is How I creat a Solution for users with Materials from the UX process.";
        setTimeout(() => {
            make_text.innerHTML = "KR";
        }, 500);
    } else {
        make_btn.style.borderRadius = "0%";
        make_btn.style.transform = "rotate( 180deg )";
        lang.style.fontFamily = "'Noto Sans KR', sans-serif";
        lang.style.fontWeight = "400";
        lang.style.lineHeight = "36px";
        lang.style.letterSpacing = "-0.2px";
        lang.innerHTML = "안녕하세요. UX 디자이너 김문수입니다. 메터리얼 앤 솔루션(Material and Solution)은 사람들에게 유용하고 매력적인 서비스를 만들어내고자 재료(Material)들을 수집하고, 그것을 서비스(Solution)로 만들어나가는 과정의 기록입니다.";

        setTimeout(() => {
            make_text.innerHTML = "EN";
        }, 500);
    }
}

function LangBtnAni() {
    let preloaderCheck = setInterval(() => {
        if (preloaderQue.style.zIndex === "-9999") {
            console.log(`end interval`);
            clearInterval(preloaderCheck);
            make_btn.style.right = "40px";
            make_text.style.right = "40px";
            make_btn.style.opacity = "1.0";
            make_text.style.opacity = "1.0";
        }
    }, 1000);
}

function makeLangBtn() {
    make_btn.style.display = "inline-block";
    make_btn.style.width = "48px";
    make_btn.style.height = "48px";
    make_btn.style.borderRadius = "50%";
    make_btn.style.backgroundColor = "rgba(47,117,255,0.8)";
    make_btn.style.bottom = "6%";
    make_btn.style.right = "-4%";
    make_btn.style.position = "fixed";
    make_btn.style.opacity = "0";
    make_btn.style.webkitTransition = "all 500ms ease-out";
    make_btn.style.mozTransition = "all 500ms ease-out";
    make_btn.style.oTransition = "all 500ms ease-out";
    make_btn.style.transition = "all 500ms ease-out";

    make_btn.style.webkitTransitionTimingFunction = "ease-out";
    make_btn.style.mozTransitionTimingFunction = "ease-out";
    make_btn.style.oTransitionTimingFunction = "ease-out";
    make_btn.style.transitionTimingFunction = "ease-out";

    bodyLang_btn.appendChild(make_btn);

    make_text.style.lineHeight = "48px";
    make_text.style.textAlign = "center";
    make_text.style.cursor = "pointer";
    make_text.style.width = "48px";
    make_text.style.height = "48px";
    make_text.style.color = "white"
    make_text.style.position = "fixed";
    make_text.style.bottom = "6%";
    make_text.style.right = "-4%";
    make_text.innerHTML = "KR";
    make_text.style.fontFamily = "'Open Sans', sans-serif";
    make_text.style.fontWeight = "400";
    make_text.style.opacity = "0";

    make_text.style.webkitTransition = "all 500ms ease-out";
    make_text.style.mozTransition = "all 500ms ease-out";
    make_text.style.oTransition = "all 500ms ease-out";
    make_text.style.transition = "all 500ms ease-out";

    make_text.style.webkitTransitionTimingFunction = "ease-out";
    make_text.style.mozTransitionTimingFunction = "ease-out";
    make_text.style.oTransitionTimingFunction = "ease-out";
    make_text.style.transitionTimingFunction = "ease-out";
    bodyLang_btn.appendChild(make_text);

    make_text.addEventListener("mouseover", langHover);
    make_text.addEventListener("mouseleave", langUnHover);
    make_text.addEventListener("click", langClick);
}

makeLangBtn();
LangBtnAni();