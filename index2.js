const historytoggler=document.querySelector(".topic__history");
historytoggler.addEventListener("click",historyToggle);

const psychologytoggler=document.querySelector(".topic__psychology");
psychologytoggler.addEventListener("click",psychologyToggle);

const noveltoggler=document.querySelector(".topic__novel");
noveltoggler.addEventListener("click",novelToggle);


function historyToggle(event){
    event.preventDefault();
    const history=document.querySelector(".history");
    history.classList.toggle("history-collaps");
}

function psychologyToggle(event){
    event.preventDefault();
    const psychology=document.querySelector(".psychology");
    psychology.classList.toggle("psychology-collaps");
}
function novelToggle(event){
    event.preventDefault();
    const novel=document.querySelector(".novel");
    novel.classList.toggle("novel-collaps");
}

