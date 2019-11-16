const blueQue = document.querySelector('#js-message');

const messageObject = document.querySelectorAll('.js-message'),
     messageButton = document.querySelector('.js-messagebutton');

function messageLoader(){
    let scrolled = window.scrollY;
    let blueQueTop = blueQue.offsetTop;

    for (k = 0; k < 2; k++) {
        if (scrolled > blueQueTop - window.innerHeight + 500) {
            messageObject[k].classList.remove('messageSlideDown');
            messageObject[k].classList.add('messageSlideUp');
        }
    }

    if (scrolled > blueQueTop - window.innerHeight + 600) {
        messageButton.classList.remove('messagePopDown');
        messageButton.classList.add('messagePopUp');
    }
}

function messageHovered(){
    messageButton.classList.add('messageHovered');
}

function messageUnHovered(){
    messageButton.classList.remove('messageHovered');
}

function init(){
    window.addEventListener("scroll", messageLoader);
    messageButton.addEventListener("mouseover", messageHovered);
    messageButton.addEventListener("mouseleave", messageUnHovered);
}

init();
