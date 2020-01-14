const bodyLang_btn = document.querySelector("body");
const lang = document.querySelectorAll(".js-lang");
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
        lang[0], lang[1], lang[2].style.fontFamily = "";
        lang[0], lang[1], lang[2].style.fontWeight = "";
        lang[0], lang[1], lang[2].style.lineHeight = "";
        lang[0], lang[1], lang[2].style.letterSpacing = "";
        lang[0].innerHTML = "Hi, I’m MOONSOO, a UX design student from Seoul currently looking for the job. I studied UX Design at Seoul National University of Science of Technology.";

        lang[1].innerHTML = "I have been Studying UX design for the last few years and collaborating with multi-disciplinary groups to create useful user experiences.";

        lang[2].innerHTML = "I like deign and code and making amazing thing and designing amazing thing.";
        setTimeout(() => {
            make_text.innerHTML = "KR";
        }, 500);
    } else {
        make_btn.style.borderRadius = "0%";
        make_btn.style.transform = "rotate( 180deg )";
        lang[0], lang[1], lang[2].style.fontFamily = "'Noto Sans KR', sans-serif";
        lang[0], lang[1], lang[2].style.fontWeight = "400";
        lang[0], lang[1], lang[2].style.lineHeight = "36px";
        lang[0], lang[1], lang[2].style.letterSpacing = "-0.2px";
        lang[0].innerHTML = "안녕하세요. 서울에 살고있는 UX 디자이너 김문수라고 합니다. 얼마전 서울과학기술대학교 디자인학과를 졸업하고, 현재 디자인 일을 찾고 있습니다.";

        lang[1].innerHTML = "지난 몇년간 UX 디자인을 공부하면서, 좋은 사용자 경험을 만들기위해 다양한 분야의 동료들과 협업하며 경험을 쌓아왔습니다.";

        lang[2].innerHTML = "저는 디자인과 코드를 좋아하며, 디자인과 코드로 아름답고 놀라운 것을 만들기를 좋아합니다.";
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
    make_btn.style.boxShadow = "4px 4px 16px 0 rgba(0,0,0,0.1)";
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