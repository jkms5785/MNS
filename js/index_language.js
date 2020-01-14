const bodyLang_btn = document.querySelector("body");
const lang = document.querySelector("#js-lang");
const make_btn = document.createElement("div");
const make_text = document.createElement("div");

function langHover() {
    console.log(`btn is hovered`);
    make_btn.style.backgroundColor = "rgba(47,117,255,0.9)";
}

function langUnHover() {
    console.log(`btn is hovered`);
    make_btn.style.backgroundColor = "rgba(47,117,255,0.6)";
}

function langClick() {
    if (make_text.innerHTML === "EN") {
        make_btn.style.borderRadius = "100%";
        make_btn.style.transform = "rotate( 0deg )";
        lang.style.fontFamily = "";
        lang.style.fontWeight = "";
        lang.style.lineHeight = "";
        lang.style.letterSpacing = "";
        lang.innerHTML = "Hi, I’m MOONSOO KIM. a UX design student from Seoul. Material and Soultion is my personal design portfolio which is How I creat a Solution for users with Materials from the design process.";
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
        lang.innerHTML = "안녕하세요. UX 디자이너 김문수입니다. Material and Solution은 디자인 프로세스로 부터 얻은 Material을 어떻게 사용자들을 위한 디자인 Solution으로 만들어 나가는지에 대한 기록입니다.";
        setTimeout(() => {
            make_text.innerHTML = "EN";
        }, 500);
    }
}

function makeLangBtn() {
    make_btn.style.display = "inline-block";
    make_btn.style.width = "48px";
    make_btn.style.height = "48px";
    make_btn.style.borderRadius = "50%";
    make_btn.style.backgroundColor = "rgba(47,117,255,0.6)";
    make_btn.style.bottom = "48px";
    make_btn.style.right = "48px";
    make_btn.style.position = "fixed";
    make_btn.style.transition = "all 750ms cubic-bezier(0.455, 0.030, 0.515, 0.955)";
    bodyLang_btn.appendChild(make_btn);

    make_text.style.lineHeight = "48px";
    make_text.style.textAlign = "center";
    make_text.style.cursor = "pointer";
    make_text.style.width = "48px";
    make_text.style.height = "48px";
    make_text.style.color = "white"
    make_text.style.position = "fixed";
    make_text.style.bottom = "48px";
    make_text.style.right = "48px";
    make_text.innerHTML = "KR";
    make_text.style.fontFamily = "'Open Sans', sans-serif";
    make_text.style.fontWeight = "400";
    bodyLang_btn.appendChild(make_text);

    make_text.addEventListener("mouseover", langHover);
    make_text.addEventListener("mouseleave", langUnHover);
    make_text.addEventListener("click", langClick);
}

makeLangBtn();