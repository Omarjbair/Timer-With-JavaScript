let Hour = document.getElementById('hour');
let Minute = document.getElementById('minute');
let Second = document.getElementById('second');
let timer_btn = document.getElementById('timer_btns');
let clock_button = document.getElementById('clock_button');
let clock_icon = document.getElementById('clock_icon');
let second_box = document.getElementsByClassName('second_box')[0];
let h = 0;
let m = 0;
let s = 0;
let i = 1;
let reload_page = 0;
let stop = "";
let date = new Date();

function time() {
    i += 1
    s += 1
    if (s == 60) {
        s = 0;
        m += 1;
    }
    if (m == 60) {
        m = 0;
        h += 1;
    }
    if (h == 24) {
        h = 0
        m = 0
        s = 0
    }
    Hour.innerText = h < 10 ? `0${h}` : h;
    Minute.innerText = m < 10 ? `0${m}` : m;
    Second.innerText = s < 10 ? `0${s}` : s;
}

function start() {
    if (i == 1)
        stop = setInterval(time, 1000)
}

function pause() {
    i = 1
    clearInterval(stop)
}

function reset() {
    h = 0;
    m = 0;
    s = 0;
    Hour.innerText = h < 10 ? `0${h}` : h;
    Minute.innerText = m < 10 ? `0${m}` : m;
    Second.innerText = s < 10 ? `0${s}` : s;
}

function clock() {
    clearInterval(stop);
    timer_btn.style.display = "none";
    second_box.style.display = "none";
    Hour.innerHTML = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    Minute.innerHTML = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    Second.innerHTML = date.getSeconds();
    if(reload_page){
        window.location.reload();
    }
    reload_page += 1
}