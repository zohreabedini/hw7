
const smaller= document.getElementById("smaller-btn");
const bigger=document.getElementById("bigger-btn");
if(!document.body.style.fontSize){
    document.body.style.fontSize="20px";
}
smaller.addEventListener("click",BeSmaller);
bigger.addEventListener("click",BeBigger);

function BeBigger(){
    document.body.style.fontSize=parseInt(document.body.style.fontSize)+2+"px";
}
function BeSmaller(){
    document.body.style.fontSize=parseInt(document.body.style.fontSize)-2+"px";
}

