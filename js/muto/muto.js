var sc = document.getElementsByClassName('bt');

var ov_tg = document.getElementById('ov_tg'),
    ov_tg_Top = ov_tg.offsetTop;

var rs_tg = document.getElementById('rs_tg'),
    rs_tg_Top = rs_tg.offsetTop;

var dp_tg = document.getElementById('dp_tg'),
    dp_tg_Top = dp_tg.offsetTop;

var ut_tg = document.getElementById('ut_tg'),
    ut_tg_Top = ut_tg.offsetTop;

var di_tg = document.getElementById('di_tg'),
    di_tg_Top = di_tg.offsetTop;

var pd_tg = document.getElementById('pd_tg'),
    pd_tg_Top = pd_tg.offsetTop;

var de_tg = document.getElementById('de_tg'),
    de_tg_Top = de_tg.offsetTop;

var fd_tg = document.getElementById('fd_tg'),
    fd_tg_Top = fd_tg.offsetTop;

function ov_scroll() {
    window.scrollTo(0, ov_tg_Top - 80);
}

function rs_scroll() {
    window.scrollTo(0, rs_tg_Top + 560);
}

function dp_scroll() {
    window.scrollTo(0, dp_tg_Top - 56);
}

function ut_scroll() {
    window.scrollTo(0, ut_tg_Top - 48);
}

function di_scroll() {
    window.scrollTo(0, di_tg_Top - 80);
}

function pd_scroll() {
    window.scrollTo(0, pd_tg_Top - 240);
}

function de_scroll() {
    window.scrollTo(0, de_tg_Top - 164);
}

function fd_scroll() {
    window.scrollTo(0, fd_tg_Top - 120);
}

var si = document.getElementsByClassName('sc_des');

function init() {
    sc[0].addEventListener('click', ov_scroll),
        sc[1].addEventListener('click', rs_scroll),
        sc[2].addEventListener('click', dp_scroll),
        sc[3].addEventListener('click', ut_scroll),
        sc[4].addEventListener('click', di_scroll),
        sc[5].addEventListener('click', pd_scroll),
        sc[6].addEventListener('click', de_scroll),
        sc[7].addEventListener('click', fd_scroll);

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

init();