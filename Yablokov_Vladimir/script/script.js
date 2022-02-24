//!!ЗАДАЧА ПЕРВАЯ!!//
const numbers = [3, 2, 1, 0, 4, 5, 6, 10, 9, 8, 7];

// Решение min/max 
function maxN(numbers){
	return numbers.sort((a,b) => a-b)[numbers.length-1]
}
function minN(numbers){
	return numbers.sort((a,b) => a-b)[0]
}
// Решение count со значением кол-ва элементов в массиве
function count(numbers){
		return numbers.length
}
//avg со значением среднего 
function average(numbers){
	let numbSum = 0;
for(let i = 0; i < numbers.length; i++){
	numbSum += numbers[i];
	}
	let avg = numbSum/numbers.length;
	return avg
}
console.log(maxN(numbers),minN(numbers),count(numbers),average(numbers));

// сразу не увидел что надо сделать объект(вперед поезда мчу)

const object = {};
function noMath(numbers){
    let sort = numbers.sort((a, b) => a-b);
    object.max = sort[sort.length-1];
    object.min = sort[0];
    object.count = numbers.length;
    let numbSum = 0;
    for (let i = 0; i < numbers.length; i++){
    numbSum += numbers[i];
    }
    object.average = numbSum/numbers.length;
return object;
}
noMath(numbers);
console.log(object);

//!!ЗАДАЧА ВТОРАЯ!!//

const formElem = document.querySelector('#numbForm');
const inputElem = document.querySelector('#inNumb');
const resultElem = document.querySelector('#result');
let sum = 0;
function formNumb(event){
	event.preventDefault();
	let numb = +inputElem.value
    sum += numb;
    resultElem.innerText = sum;
}
formElem.addEventListener('submit', formNumb);

//!!ЗАДАЧА ТРЕТЬЯ!!//

const colorForm = document.querySelector('#colorForm'); 
const inputColorElem = document.querySelector('#inColor'); 
const colorOut = document.querySelector('#colors'); 
function formColor(event){
    event.preventDefault(); 
    let divColor = document.createElement('div'); 
    colorOut.appendChild(divColor);
    divColor.innerText = inputColorElem.value;
    divColor.style.backgroundColor = inputColorElem.value;
    divColor.style.textAlign = 'center';
}
colorForm.addEventListener('submit', formColor);
