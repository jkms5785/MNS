const bodyLang_btn = document.querySelector("body");
const lang = document.querySelectorAll(".js-lang");
const make_btn = document.createElement("div");
const make_text = document.createElement("div");

const preloaderQue = document.querySelector("#js-preloader");

let blue;

function langHover() {
    if(blue == true){
          make_btn.style.backgroundColor = "rgba(255,255,255,0.38)";
    }else{
        make_btn.style.backgroundColor = "rgba(47,117,255,0.6)";
    }
}

function langUnHover() {
     if(blue == true){
          make_btn.style.backgroundColor = "rgba(255,255,255,0.2)";
    }else{
        make_btn.style.backgroundColor = "rgba(47,117,255,0.8)";
    }
}

function langClick() {
    if (make_text.innerHTML === "EN") {
        make_btn.style.borderRadius = "100%";
        make_btn.style.transform = "rotate( 0deg )";
        lang[0], lang[1], lang[2].style.fontFamily = "";
        lang[0], lang[1], lang[2].style.fontWeight = "";
        lang[0], lang[1], lang[2].style.lineHeight = "";
        lang[0], lang[1], lang[2].style.letterSpacing = "";
        lang[0].innerHTML = "Hi, I’m MOONSOO, a UX design student from Seoul currently looking for the job. I studied UX Design at Seoul National University of Science of Technology. I have been Studying UX design for the last few years and collaborating with multi-disciplinary groups to create useful user experiences. ";

        lang[1].innerHTML = "I don't think of design as a simple drawing, but I constantly think about delivering a useful user experience. I am familiar with code and collaboration with my knowledge of front-end development using HTML/CSS/JavaScript and my experience working with back-end developers.";

        lang[2].innerHTML = "I like deign and code and making amazing thing and designing amazing thing. I am always eager to learn new technologies.";
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
        lang[0].innerHTML = "안녕하세요. UX 디자이너 김문수입니다. 서울과학기술대학교 디자인학과를 졸업하고, 현재 디자인 일을 찾고 있습니다. 지난 몇년간 UX 디자인을 공부하며 좋은 사용자 경험을 만들기위해 다양한 분야의 동료들과 협업하며 경험을 쌓아왔습니다.";

        lang[1].innerHTML = "저는 디자인을 단순한 그리기로 생각하지 않고 유용한 사용자 경험을 전달하기 위해 끊임없이 고민합니다. 또한, HTML/CSS/JavaScript를 활용한 프론트 엔드 개발 지식과 백 엔드 개발자들과의 협업 경험으로 코드와 협업에 익숙합니다.";

        lang[2].innerHTML = "디자인과 코드로 놀랍고 유용한것을 디자인하는 것을 좋아하며 새로운 것을 배우는 것에 열정적입니다.";
        setTimeout(() => {
            make_text.innerHTML = "EN";
        }, 500);
    }
}

function LangBtnAni() {
    let preloaderCheck = setInterval(() => {
        if (preloaderQue.style.height === "0px") {
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

function colorChnage(e) {
    e.preventDefault();
    const currentTop = e.target.scrollingElement.scrollTop;

    const resumeBlue = document.querySelector(".resume_blue");
    const blueTop = resumeBlue.offsetTop;
    const blueHeight = resumeBlue.offsetHeight;
    const winHeight = window.innerHeight;

    if (currentTop + winHeight + 64 >= blueTop && currentTop + winHeight + 64 <= blueTop + blueHeight) {
        make_btn.style.backgroundColor = "rgba(255,255,255,0.2)";
        blue = true;
    }else{
        make_btn.style.backgroundColor = "rgba(47,117,255,0.8)";
         blue = false;
    }
}

window.addEventListener("scroll", colorChnage);

LangBtnAni();
makeLangBtn();