var sc = document.getElementsByClassName('bt');

var ov_tg = document.getElementById('w-1'),
    ov_tg_Top = ov_tg.offsetTop;

var rs_tg = document.getElementById('w-2'),
    rs_tg_Top = rs_tg.offsetTop;

var dp_tg = document.getElementById('w-3'),
    dp_tg_Top = dp_tg.offsetTop;

var ut_tg = document.getElementById('w-4'),
    ut_tg_Top = ut_tg.offsetTop;

var di_tg = document.getElementById('w-5'),
    di_tg_Top = di_tg.offsetTop;

var pd_tg = document.getElementById('w-6'),
    pd_tg_Top = pd_tg.offsetTop;

var pd_tg_1 = document.getElementById('w-7'),
    pd_tg_Top_1 = pd_tg_1.offsetTop;

var pd_tg_2 = document.getElementById('w-8'),
    pd_tg_Top_2 = pd_tg_2.offsetTop;

var pd_tg_3 = document.getElementById('w-9'),
    pd_tg_Top_3 = pd_tg_3.offsetTop;

var pd_tg_4 = document.getElementById('w-10'),
    pd_tg_Top_4 = pd_tg_4.offsetTop;

var pd_tg_5 = document.getElementById('w-11'),
    pd_tg_Top_5 = pd_tg_5.offsetTop;

function ov_scroll() {
    window.scrollTo(0, ov_tg_Top);
}

function rs_scroll() {
    window.scrollTo(0, rs_tg_Top - 80);
}

function dp_scroll() {
    window.scrollTo(0, dp_tg_Top - 40);
}

function ut_scroll() {
    window.scrollTo(0, ut_tg_Top);
}

function di_scroll() {
    window.scrollTo(0, di_tg_Top - 24);
}

function pd_scroll() {
    window.scrollTo(0, pd_tg_Top + 220);
}

function pd_scroll_1() {
    window.scrollTo(0, pd_tg_Top_1 - 40);
}

function pd_scroll_2() {
    window.scrollTo(0, pd_tg_Top_2 + 280);
}

function pd_scroll_3() {
    window.scrollTo(0, pd_tg_Top_3 - 40);
}

function pd_scroll_4() {
    window.scrollTo(0, pd_tg_Top_4 - 80);
}

function pd_scroll_5() {
    window.scrollTo(0, pd_tg_Top_5 - 40);
}



var si = document.getElementsByClassName('sc_des');

function init() {
    sc[0].addEventListener('click', ov_scroll),
        sc[1].addEventListener('click', rs_scroll),
        sc[2].addEventListener('click', dp_scroll),
        sc[3].addEventListener('click', ut_scroll),
        sc[4].addEventListener('click', di_scroll),
        sc[5].addEventListener('click', pd_scroll),
        sc[6].addEventListener('click', pd_scroll_1),
        sc[7].addEventListener('click', pd_scroll_2),
        sc[8].addEventListener('click', pd_scroll_3),
        sc[9].addEventListener('click', pd_scroll_4),
        sc[10].addEventListener('click', pd_scroll_5);

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