const work = document.getElementsByClassName("js-thumbnail"),
     workLength = work.length;

function Que() {
    let img = this.children[0].children[0],
        text = this.children[0].children[1].children[0],
        viewProject = this.children[0].children[1].children[1];

    this.classList.add('imgHovered');
    img.style.opacity = "0.8";
    text.classList.add("textHovered");
    viewProject.classList.add("viewProjectHovered");

    if (this == work[2]) {
        img.src = "img/work_latup_m.gif";
    }
}

function Stop() {
    img = this.children[0].children[0],
        text = this.children[0].children[1].children[0],
        viewProject = this.children[0].children[1].children[1];

    this.classList.remove('imgHovered');
    img.style.opacity = "1";
    text.classList.remove("textHovered");
    viewProject.classList.remove("viewProjectHovered");

    if (this == work[2]) {
        img.src = "img/work_latup.png";
    }
}

function workLoader() {
    let scrolled = window.scrollY;
    const scrollobject = document.getElementsByClassName('js-workUp'),
        workLength = scrollobject.length;

    for (k = 0; k < workLength; k++) {
        let scrollQue = scrollobject[k].offsetTop - window.innerHeight;
        if ((Math.ceil(scrolled) - 1024) + 600 >= (scrollobject[k].offsetTop + 120)) {
            scrollobject[k].classList.remove('slideOrigin');
            scrollobject[k].classList.add('slideUp');
        }
    }
}

function init() {
    for (i = 0; i < workLength; i++) {
        work[i].addEventListener("mouseover", Que);
        work[i].addEventListener("mouseleave", Stop);
    }
    window.addEventListener('scroll', workLoader);
}

init();