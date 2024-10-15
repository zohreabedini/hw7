
let min = document.querySelector(".minute");
let sec = document.querySelector(".second");
let minisec = document.querySelector(".milliseconds");
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let Interval;
let splittime;
let elme=document.querySelector(".timer")

const start = document.querySelector(".start");
start.addEventListener("click", startRecord);

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetRecod);

const stop = document.querySelector(".stop");
stop.addEventListener("click", stopRecord);

const split=document.querySelector(".split");
split.addEventListener("click",getSplit);
let mins=document.querySelector(".minute");
let secs=document.querySelector(".second");
let minis=document.querySelector(".milliseconds");

function getSplit(){
    let liLast = document.createElement('li');
    liLast.innerHTML = mins.innerHTML+":"+secs.innerHTML+":"+minis.innerHTML;
    slist.append(liLast);
}


function startRecord() {
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);
}
function stopRecord() {
    clearInterval(Interval);
}
function resetRecod() {
    clearInterval(Interval);
    minisec.innerHTML = "00";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
}

function startTimer() {
    milliseconds++;
    minisec.innerHTML = (milliseconds < 10 ? "0" : "" ) + milliseconds;
    if (milliseconds > 99) {
        seconds++
        min.innerHTML = "0" + seconds;
        milliseconds = 0;
    }
    sec.innerHTML=(seconds < 10 ? "0" : "" ) +seconds;
    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }
     min.innerHTML=(minutes < 10 ? "0" : "" ) + minutes; 
}


