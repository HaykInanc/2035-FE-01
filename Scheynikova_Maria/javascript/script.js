const myArray = [100, 56, 82, 12, 14, 5, 6, 75];
const obj = {};

function createObj(array) {
    let sortedArray = array.sort((a, b) => a-b);
    obj.max = sortedArray[sortedArray.length-1];
    obj.min = sortedArray[0];
    obj.count = array.length;
    let sumArray = 0;
    for (let i = 0; i < array.length; i++){
        sumArray += array[i];
    }
    obj.avg = sumArray / obj.count;
    return obj;
}

createObj(myArray);

console.log(obj);



/************************************ */

const formElem = document.querySelector('#numberedForm');
let resultElem = document.querySelector('#result');
let inputElem = document.querySelector('#input_number');
let sum = 0;

function formHandler(event) { 
    event.preventDefault(); 
    let y = Number(inputElem.value);
    sum += y;
    resultElem.innerText = sum;
    inputElem.value = '';
}

formElem.addEventListener('submit', formHandler); 



/************************************* */

const coloredForm = document.querySelector('#coloredForm'); 
const inputColorElem = document.querySelector('#input_color'); 
const divRoot = document.querySelector('#colors'); 

function formChangeColor(event) {
    event.preventDefault(); 
    let divChild = document.createElement('div'); 
    divRoot.appendChild(divChild);
    divChild.innerText = inputColorElem.value;
    divChild.style.backgroundColor = inputColorElem.value;
    inputColorElem.value = '';
}

coloredForm.addEventListener('submit', formChangeColor);
