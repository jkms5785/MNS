const about = document.querySelectorAll(".js-info"),
    num = document.querySelectorAll(".js-num"),
    body = document.querySelectorAll(".js-resuemeQue"),
    line = document.querySelectorAll(".js-line");

function ResumeBodyDown(i) {
    line[i].classList.remove("lineTo");
    num[i].classList.add('resume_num');
    num[i].classList.remove('resume_numUp');

    let length = body[i].children.length;

    function skillDown() {
        if (i < 3) {
            for (l = 0; l < length; l++) {
                body[i].children[l].classList.add("ResumeSlideDown");
            }
        } else {
            let length2 = body[i + 1].children.length,
                length3 = body[i + 2].children.length;
            for (l = 0; l < length; l++) {
                body[i].children[l].classList.add("ResumeSlideDown");
            }
            for (l = 0; l < length2; l++) {
                body[i + 1].children[l].classList.add("ResumeSlideDown");
            }
            for (l = 0; l < length3; l++) {
                body[i + 2].children[l].classList.add("ResumeSlideDown");
            }
        }
    }
    skillDown(i);
}

function ResumeBodyUp(i) {
    num[i].classList.remove('resume_num');
    num[i].classList.add('resume_numUp');
    line[i].classList.add("lineTo");
    let length = body[i].children.length;

    let c = 0;

    if (i + 1 < about.length) {
        function bodyUp(e) {
            if (c < e) {
                setTimeout(function () {
                    body[i].children[c].classList.remove("ResumeSlideDown");
                    c++;
                    bodyUp(e);
                }, 20);
            }
        }
        bodyUp(length);
    } else if (i + 1 == about.length) {
        let length2 = body[i + 1].children.length,
            length3 = body[i + 2].children.length;

        function SkillUp1(e) {
            if (c < e) {
                setTimeout(function () {
                    body[i].children[c].classList.remove("ResumeSlideDown");
                    c++;
                    SkillUp1(e);
                }, 20);
            } else {
                c = 0;
                SkillUp2(length2);
            }
        }

        function SkillUp2(b) {
            if (c < b) {
                setTimeout(function () {
                    body[i + 1].children[c].classList.remove("ResumeSlideDown");
                    c++;
                    SkillUp2(b);
                }, 20);
            } else {
                c = 0;
                SkillUp3(length3);
            }
        }

        function SkillUp3(t) {
            if (c < t) {
                setTimeout(function () {
                    body[i + 2].children[c].classList.remove("ResumeSlideDown");
                    c++;
                    SkillUp3(t);
                }, 35);
            }
        }
        SkillUp1(length);
    }
}

function init() {
    for (i = 0; i < about.length; i++) {
        about[i].index = i;
        about[i].addEventListener("mouseover", function (e) {
            let indexValue = e.target.index;
            ResumeBodyUp(indexValue);
        }, false);

        about[i].addEventListener("mouseleave", function (e) {
            let indexValue = e.target.index;
            ResumeBodyDown(indexValue);
        }, false);
    }
}

init();

function dateBr() {
    const dateCont = document.querySelectorAll(".js-date");
    if (window.innerWidth < 800) {
        dateCont[0].innerHTML = `South Korea<div class="date">Mar 2013 - Feb 2020</div>`;
         dateCont[1].innerHTML = `UX planner&nbsp;&nbsp;
                                    <span class="date">Jan 2021 - Present </span>`;
        dateCont[2].innerHTML = `Service & Biz developer&nbsp;&nbsp;
                                    <div class="date">Jul 2020 - Aug 2020</div>`;
        dateCont[3].innerHTML = `Designer & Front-end developer&nbsp;&nbsp;
                                    <div class="date">Mar 2019 - Dec 2019</div>`;
        dateCont[4].innerHTML = `Students Reasercher&nbsp;&nbsp;
                                    <div class="date">Mar 2017 - Jul 2019</div>`;
        dateCont[5].innerHTML = `Students Designer&nbsp;&nbsp; <div class="date">Mar 017 - Dec 2019</div>`;
        dateCont[6].innerHTML = `Designer&nbsp;&nbsp;<div class="date">Jan 2014 - Mar 2014</div>`;
    } else {
        dateCont[0].innerHTML = `  South Korea&nbsp;&nbsp; <span class="date">Mar 2013 - Feb 2020</span>`;
         dateCont[1].innerHTML = `UX planner&nbsp;&nbsp;
                                    <span class="date">Jan 2021 - Present </span>`;
        dateCont[2].innerHTML = `Service & Biz developer&nbsp;&nbsp;
                                    <span class="date">Jul 2020 - Aug 2020</span>`;
        dateCont[3].innerHTML = `Designer & Front-end developer&nbsp;&nbsp;
                                    <span class="date">Mar 2019 - Dec 2019</span>`;
        dateCont[4].innerHTML = `Students Reasercher&nbsp;&nbsp;
                                    <span class="date">
                                        Mar 2017 - Jul 2019</span>`;
        dateCont[5].innerHTML = `Students Designer&nbsp;&nbsp; <span class="date">Mar 2017 - Dec 2019</span>`;
        dateCont[6].innerHTML = `Designer&nbsp;&nbsp;<span class="date">Jan
                                        2014 - Mar 2014</span>`;
    }
}

dateBr();

window.addEventListener("resize", dateBr);