let sc = document.getElementsByClassName('bt');

let bg_tg = document.getElementById('bg_tg'),
    bg_tg_Top,
    ov_tg = document.getElementById('ov_tg'),
    ov_tg_Top,
    taskAnal_tg = document.getElementById('taskAnal_tg'),
    taskAnal_tg_Top,
    curSit_tg = document.getElementById('curSit_tg'),
    curSit_tg_Top,
    inv_tg = document.getElementById('inv_tg'),
    inv_tg_Top,
    obj_tg = document.getElementById('obj_tg'),
    obj_tg_Top,
    diSystem_tg = document.getElementById('diSystem_tg'),
    diSystem_tg_Top,
    diComp_tg = document.getElementById('diComp_tg'),
    diComp_tg_Top,
    sol_tg = document.getElementById('sol_tg'),
    sol_tg_Top,
    posb_tg = document.getElementById('posb_tg'),
    posb_tg_Top;

const winHeightQue = document.querySelector(".win_height");

function init() {
    let si = document.getElementsByClassName('sc_des');

    function li_click(idx) {
        sc[idx].onmouseover = function () {
            sc[idx].classList.add('bt_scale');
            si[idx].classList.add('side_pop_up');
            si[idx].style.opacity = '0.8';
        };

        sc[idx].onmouseout = function () {
            sc[idx].classList.remove('bt_scale');
            si[idx].classList.remove('side_pop_up');
            si[idx].style.opacity = '0';
        };
    }

    for (var i = 0; i < sc.length; i++) {
        li_click(i);
    }
}

function makeOffsetHeight(e) {
    e.preventDefault();
    if (winHeightQue.alt === `hackathon_img_loaded`) {
        makeScrollEvent();
        window.removeEventListener("scroll", makeOffsetHeight);
    }
    window.addEventListener("resize", makeScrollEvent);
}

function makeScrollEvent() {
    bg_tg_Top = bg_tg.offsetTop,
        ov_tg_Top = ov_tg.offsetTop,
        taskAnal_tg_Top = taskAnal_tg.offsetTop,
        curSit_tg_Top = curSit_tg.offsetTop,
        obj_tg_Top = obj_tg.offsetTop,
        inv_tg_Top = inv_tg.offsetTop,
        diSystem_tg_Top = diSystem_tg.offsetTop,
        diComp_tg_Top = diComp_tg.offsetTop,
        sol_tg_Top = sol_tg.offsetTop,
        posb_tg_Top = posb_tg.offsetTop;

    function bg_scroll() {
        window.scrollTo(0, bg_tg_Top + 24);
    }

    function ov_scroll() {
        window.scrollTo(0, ov_tg_Top - 80);
    }

    function taskAnal_scroll() {
        window.scrollTo(0, taskAnal_tg_Top + 136);
    }

    function curSit_scroll() {
        window.scrollTo(0, curSit_tg_Top + 64);
    }

    function inv_scroll() {
        window.scrollTo(0, inv_tg_Top - 64);
    }

    function obj_scroll() {
        window.scrollTo(0, obj_tg_Top);
    }

    function diSystem_scroll() {
        window.scrollTo(0, diSystem_tg_Top + 120);
    }

    function diComp_scroll() {
        window.scrollTo(0, diComp_tg_Top - 16);
    }

    function sol_scroll() {
        window.scrollTo(0, sol_tg_Top + 264);
    }

    function posb_scroll() {
        window.scrollTo(0, posb_tg_Top + 124);
    }

    sc[0].addEventListener('click', bg_scroll),
        sc[1].addEventListener('click', ov_scroll),
        sc[2].addEventListener('click', taskAnal_scroll),
        sc[3].addEventListener('click', curSit_scroll),
        sc[4].addEventListener('click', inv_scroll),
        sc[5].addEventListener('click', obj_scroll),
        sc[6].addEventListener('click', diSystem_scroll),
        sc[7].addEventListener('click', diComp_scroll),
        sc[8].addEventListener('click', sol_scroll),
        sc[9].addEventListener('click', posb_scroll);
}

window.addEventListener("scroll", makeOffsetHeight);

init();