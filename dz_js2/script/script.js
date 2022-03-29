var arr = [2, 4, 55, 12, 5, 88, 6, 75, 4, 5, 8, 3, 34, 56, 55, 54, 67, 79, 105, 77, 40, 401, 1];

//задание 1

function maximum(arr) {
	let max = arr[1];
	for (let i = 0; i < arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

console.log('значение максимального числа =', maximum(arr));

function minimum(arr){
	let min = arr[1];
	for (let i = 0; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return min;
}

console.log('значение минимального числа =', minimum(arr));

function count(arr){
	let count = 0;
	for (let i = 0; i < arr.length; i++){
		count++;
	}
	return count;
}

console.log('значение кол-ва элементов =', count(arr));

function avg(arr){
	let avg = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}
	avg = sum / arr.length;
	return avg;
}

console.log('значение среднего =', avg(arr));


//задание 2

const formElem = document.querySelector('#task2');
const result = document.querySelector('#result'); 
let summa = 0;

function form_handler(event) {
	event.preventDefault();
	const inputElem = document.querySelector('#inp');
	let a = Number(inputElem.value);
	summa = summa + a;
	result.innerText = summa;
}

formElem.addEventListener('submit', form_handler);

//задание 3

const formElem_2 = document.querySelector('#task3');
const color = document.querySelector('#color'); 

function task_3(event){
	event.preventDefault();
	const inputElem_2 = document.querySelector('#input');
	const divElem = document.createElement('div');
	divElem.classList.add('in');
	document.getElementById('color').appendChild(divElem);
	divElem.innerText = inputElem_2.value;
	divElem.style.backgroundColor = inputElem_2.value;
	divElem.style.width = '100px';
	divElem.style.height = '100px';
	divElem.style.display = 'flex';
	divElem.style.alignItems = 'center';
	divElem.style.paddingLeft = '25px';
}

formElem_2.addEventListener('submit', task_3);

