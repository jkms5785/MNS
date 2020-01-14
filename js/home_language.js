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
        lang.innerHTML = "안녕하세요. UX 디자이너 김문수입니다. 메터리얼 앤 솔루션(Material and Solution)은 디자인 프로세스의 재료(Material)들을 수집하고 그것을 사용자들을 위한 디자인(Solution)으로 만들어나가는 과정을 기록한 포트폴리오 입니다.";
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
    make_btn.style.bottom = "72px";
    make_btn.style.right = "72px";
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
    make_text.style.bottom = "72px";
    make_text.style.right = "72px";
    make_text.innerHTML = "KR";
    make_text.style.fontFamily = "'Open Sans', sans-serif";
    make_text.style.fontWeight = "400";
    bodyLang_btn.appendChild(make_text);

    make_text.addEventListener("mouseover", langHover);
    make_text.addEventListener("mouseleave", langUnHover);
    make_text.addEventListener("click", langClick);
}

makeLangBtn();