let inputs = document.getElementById('inputs');
let currentInput = '';
let acbtn = document.querySelector(".calcbody__keys__button__ac");
acbtn.addEventListener("click", clearScreen);
let cbtn = document.querySelector(".calcbody__keys__button__c");
cbtn.addEventListener("click", clearScreen);
let informations = document.createElement('div');
let result="";
let showresult=document.querySelector(".show__result");
function display(value) {
   
    currentInput += value;
    inputs.value = currentInput;
   
    informations.innerHTML = inputs.value;
    inputs.append(informations)
}
function solve() {
    console.log(currentInput);
    try {
        result= eval(currentInput);
        showresult.innerHTML=result;
        currentInput = result;  
console.log(showresult.innerHTML);
       
    } catch (error) {
        currentInput = '';
        inputs.value = '';
        showresult.innerHTML='Eror'
    }
}

function clearScreen() {
    inputs.value = '';
    currentInput = '';
    informations.innerHTML =inputs.value;
    showresult.innerHTML='';
}