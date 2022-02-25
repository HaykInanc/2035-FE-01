//!!ЗАДАЧА ПЕРВАЯ!!// 
//v1.0
const noMath = {
    numbers : [3, 2, 1, 0, 4, 5, 6, 10, 9, 8, 7],
    get_max(){
        return this.numbers.sort((a, b) => b-a)[0]
    },
    get_min(){
        return this.numbers.sort((a, b) => a-b)[0]
    },
    get_count(){
        return this.numbers.length
    },
    get_avg(){
        let numbSum = 0;
        for(let i = 0; i < this.get_count(); i++){
            numbSum += this.numbers[i];
        };
        return numbSum/this.get_count()
    }
}
console.log(noMath.get_max());
console.log(noMath.get_min());
console.log(noMath.get_count());
console.log(noMath.get_avg());

//v1.1
const numbers = [3, 2, 1, 0, 4, 5, 6, 10, 9, 8, 7];
const object = {};
function noMath1(numbers){
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
noMath1(numbers);
console.log(object);

// хочу поинтересоваться какая реализация более правильная?
// v1.0 делал опираясь на прошедший материал
// v1.1 подсмотрел в интернете

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
