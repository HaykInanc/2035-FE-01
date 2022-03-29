const arr = [1,3,5,6,7,8,9,0,22,33,44,55,66,77,88,99,123,234,345,456];

//Ззадание 1
//- max со значением максимального числа

function max(arr) {
	let max = arr[0];
	for (let i = 1; i < arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

console.log('значение максимального значения массива =', max(arr));

//- min со значением минимального числа

function min(arr){
	let min = arr[0];
	for (let i = 1; i < arr.length; i++){
		if (arr[i] < min){
			min = arr[i];
		}
	}
	return min;
}

console.log('значение минимального значения массива =', min(arr));

// - count со значением кол-ва элементов в массиве

function count(arr){
	let count = 0;
	for (let i = 0; i < arr.length; i++){
		count++;
	}
	return count;
}

console.log('значение кол-ва элементов массива =', count(arr));

//- avg со значением среднего 

function avg(arr){
	let avg = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		sum = sum + arr[i];
	}
	avg = sum / arr.length;
	return avg;
}

console.log('значение среднего значения элементов массива =', avg(arr));

//задание 2
//В данном задании вам необходимо реализовать сумматор. 
// Добавьте в HTML страницу форму с полем ввода и кнопкой "Прибавить". Помимо этого ниже добавьте параграф с id "result".
// Напишите обработчик в javascript, который при submit формы забирает значение из поля ввода и прибавляет его к значению из параграфа "result". Общий результат выводится в параграф "result".
// Процесс должен корректно работать только при вводе числа в поле формы, иные сценарии поведения пользователя обрабатывать не нужно.

const formElem = document.querySelector('#form_1');
const result = document.querySelector('#result'); 
let sum = 0;

function form_handler(event) {
	event.preventDefault();
	const inputElem = document.querySelector('#sum');
	let a = Number(inputElem.value);
	sum = sum + a;
	result.innerText = sum;
}

formElem.addEventListener('submit', form_handler);


//задание 3
//Добавьте в HTML страницу форму с полем ввода и кнопкой "Добавить". 
//Помимо этого ниже добавьте div с id "colors". Поле ввода должно принимать значение цвета.
//Напишите обработчик в javascript, 
//который при submit формы забирает значение из поля ввода и в div с id "colors" создает еще один div. 
//У нового div в центре должен быть код цвета, введенный пользователем,
// а цвет заднего фона нового div должен быть окрашен тем цветом, который был получен из input элемент.
// При добавлении нового элемента старые не должны пропадать.

const formElem_2 = document.querySelector('#form_2');
const color = document.querySelector('#color'); 

function form_handler_2(event){
	event.preventDefault();
	const inputElem_2 = document.querySelector('#add');
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

formElem_2.addEventListener('submit', form_handler_2);