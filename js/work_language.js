const bodyLang_btn = document.querySelector("body");
const lang = document.querySelectorAll(".js-lang")
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
        lang[0].style.fontFamily = "";
        lang[0].style.fontWeight = "";
        lang[0].style.lineHeight = "";
        lang[0].style.letterSpacing = "";
        lang[1].style.fontFamily = "";
        lang[1].style.fontWeight = "";
        lang[1].style.lineHeight = "";
        lang[1].style.letterSpacing = "";
        lang[0].innerHTML = "I think UX design is the process of making what people need through the processing of rough materials. UX Designers collect and process many raw materials to create useful, attractive objects for people.In this process, UX designers have a lot of troubles.Finally, the rough materials will be a solution for the people through the efforts of the UX designer."

        lang[1].innerHTML = "This portfolio will show you materials I've gathered in the process of creating useful, attractive services for people, and how materials has became a solution.";
        setTimeout(() => {
            make_text.innerHTML = "KR";
        }, 500);
    } else {
        make_btn.style.borderRadius = "0%";
        make_btn.style.transform = "rotate( 180deg )";
        lang[0].style.fontFamily = "'Noto Sans KR', sans-serif";
        lang[0].style.fontWeight = "400";
        lang[0].style.lineHeight = "36px";
        lang[0].style.letterSpacing = "-0.4px";
        lang[1].style.fontFamily = "'Noto Sans KR', sans-serif";
        lang[1].style.fontWeight = "400";
        lang[1].style.lineHeight = "36px";
        lang[1].style.letterSpacing = "-0.4px";
        lang[0].innerHTML = "메터리얼 앤 솔루션. UX 디자인은 누군가에게 필요한 것을 만들기 위해 재료들을 수집하고, 가공하는 과정이라고 생각합니다. UX 디자이너는 사람들에게 유용하고 매력적인 것을 만들어내기 위해 다듬어지지 않은 재료들을 수집하고 가공합니다. 이 과정에서 UX 디자이너는 치열하게 고민하고, 때로는 재료를 부수기도 합니다. 거칠었던 재료들은 UX 디자이너의 손을 거쳐 마침내 사람들에게 필요한 아름다운 존재가 됩니다.";

        lang[1].innerHTML = "이 포트폴리오는 사람들에게 유용하고, 매력적인 디자인을 만들고자 제가 수집한 재료들과, 재료(Material)들이 마침내 사람들에게 필요한 서비스(Solution)가 되기까지의 과정을 보여줄 것입니다.";
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
LangBtnAni();
makeLangBtn();

function messageLang() {
    const messageText = document.querySelector(".sub_body");
    if (window.innerWidth < 800) {
        messageText.innerHTML = `Are you looking for a designer who hustles hard but stays humble? I am waiting for your contact. <br>do get in touch.`;
    } else {
        messageText.innerHTML = `Are you looking for a designer who hustles hard but stays humble? <br>I am waiting for your contact. do get in touch.`;
    }
}

window.addEventListener("resize", messageLang);