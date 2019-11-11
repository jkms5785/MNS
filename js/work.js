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

   if(this == work[1]){
        work[1].firstChild.children[0].setAttribute('src', 'http://https://jkms5785.github.io/MaterialAndSolution/img/work_latup_m.gif');
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

    if(this == work[1]){
              work[1].firstChild.children[0].setAttribute('src', 'http://https://jkms5785.github.io/MaterialAndSolution/img/work_latup.png');
   }

}

function init() {
    var i = 0;
    for (i = 0; i < workLength; i++) {
        work[i].addEventListener("mouseover", Que);
        work[i].addEventListener("mouseleave", Stop);
    }
}

init();