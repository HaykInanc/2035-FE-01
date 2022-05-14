/*1) Написать функцию, которая получает массив из чисел в качестве аргумента и возвращает объект со следующими свойствами:
   - max со значением максимального числа
   - min со значением минимального числа
   - count со значением кол-ва элементов в массиве
   - avg со значением среднего 
   В этом задании нельзя использовать объект Math*/

/*const arrayOfNumbers = [31, -19, 20.9, 2331.82, 13, -5];
let maxValue = arrayOfNumbers[0];
let minValue = arrayOfNumbers[0];
let sumValue = 0;
let avgValue = 1;
let countValuesOfArray = arrayOfNumbers.length;
const obj = {};

function getArrayOfNumbers(array){
	for (let i = 0; i < arrayOfNumbers.length; i++){
		obj['count'] = countValuesOfArray;
		if (maxValue < arrayOfNumbers[i]){
			maxValue = arrayOfNumbers[i];
			obj['max'] = maxValue;
		}else{
			minValue = arrayOfNumbers[i];
			obj['min'] = minValue;
		};
		sumValue += arrayOfNumbers[i];
		obj['sum'] = sumValue;
		avgValue = sumValue / countValuesOfArray;
		obj['avg'] = avgValue;
	};
	return obj
}
console.log(getArrayOfNumbers());*/
		
// console.log(`Максимальное значение массива: ${maxValue}`);
// console.log(`Минимальное значение массива: ${minValue}`);
// console.log(`Количество элементов массива: ${countValuesOfArray}`);
// console.log(`Сумма элементов массива: ${sumValue}`);
// console.log(`Среднее значение: ${avgValue}`);


/*2) В данном задании вам необходимо реализовать сумматор.
   Добавьте в HTML страницу форму с полем ввода и кнопкой "Прибавить". Помимо этого ниже добавьте параграф с id "result".
   Напишите обработчик в javascript, который при submit формы забирает значение из поля ввода и прибавляет его к значению 
   из параграфа "result". Общий результат выводится в параграф "result". Процесс должен корректно работать только при вводе 
   числа в поле формы, иные сценарии поведения пользователя обрабатывать не нужно. Сделать функцию, которая забирает 
   значение из поля ввода и выводит результат в консоль.
*/


/*const formElem = document.querySelector('form');
formElem.addEventListener('submit', event => {
	event.preventDefault();
	const inputElem = document.querySelector('input');
	const pElem = document.querySelector('p');
	pElem.innerText = +pElem.innerText + +inputElem.value;
});
*/


/*const formElem = document.querySelector('form');
function getResultSum(event){
	event.preventDefault();
	const inputElem = document.querySelector('input');
	const pElem = document.querySelector('p');
	pElem.innerText = +pElem.innerText + +inputElem.value;
	inputElem.value = '';
}
formElem.addEventListener('submit', getResultSum);*/


/*
0 -> +1;
забрать 1 + 12 -> 13
забрать 13...*/


// 3) В данном задании вам необходимо реализовать процесс отображения цвета по коду (пример: #43d341).

// Добавьте в HTML страницу форму с полем ввода и кнопкой "Добавить". 
// Помимо этого ниже добавьте div с id "colors". Поле ввода должно принимать значение цвета.

// Напишите обработчик в javascript, который при submit формы забирает значение из поля ввода 
// и в div с id "colors" создает еще один div. У нового div в центре должен быть код цвета, 
// введенный пользователем, а цвет заднего фона нового div должен быть окрашен тем цветом, 
// который был получен из input элемент. При добавлении нового элемента старые не должны пропадать.

// Помимо загрузки решения на данный ресурс необходимо сделать pull request в проект 
// https://github.com/HaykInanc/2035-FE-01. 
// Вам необходимо сделать fork создать папку со своей фамилией и именем через 
// нижнее подчеркивание (пример: Inants_Hayk) загрузить туда свой проект и сделать pull request.

const formElem = document.querySelector('form');
const array = [];

formElem.addEventListener('submit', event => {
	event.preventDefault();
	const bodyElem = document.querySelector('body');
	const inputElem = document.querySelector('input');
	const divGetInputColor = document.createElement('div');
	const divColorsElem = document.createElement('div')
	divColorsElem.classList.add('colors');

	bodyElem.appendChild(divColorsElem);
	divColorsElem.appendChild(divGetInputColor);
	divColorsElem.style.backgroundColor = inputElem.value;
	
	divGetInputColor.innerText = inputElem.value;
	array.push(divColorsElem);
	inputElem.value = '';
})



















// Занятие 4. Самостоятельная отработка. Объекты.

// Описание лося (elk)

// Свойства (переменные) лося
// Параметры метода лося

/*const elk = {
	height: 230,
	energy: 70,
	color: "gray",
	sound: 'АААААА!!!',
	run: function(){
		// elk.energy = elk.energy - 10;
		// elk.energy -= 10;
		this.energy -= 10; Свойство объекта, которое
		в нестрогом режиме (usestrict) является ссылкой
		на объект elk
	},
	changeColor: function(newColor){
		this.color = newColor;
	},
	getSound(){
		console.log(this.sound);
	}
};

const dog = {
	sound: 'bark-bark'
}

dog.getSound = elk.getSound;
dog.getSound();
elk.getSound();*/

// Стрелочная функция.
// function power(value, p) {
// 	return value ** p
// }

// const power_1 = (value, p) => {
// 	return value ** p
// }
// Укороченная запись, пользуясь стрелочной функцией
// можно не прописывать скобки и return, 
// js воспринимает это одинаково.
// const power_1 = (value, p) => value ** p

// const power_2 = (value) => value ** 2
// Если мы указываем только один аргумент,
// то запись выглядит следущим образом.
// const power_2 = value => value ** 2

// console.log(power(2, 2));
// console.log(power_1(2, 2));
// console.log(power_2(2));


// Метод массива .sort
/*let array = [24, 101, -5, 34, 13, 71];
console.log(array.sort((a, b) => a - b));
console.log(array.sort((a, b) => b - a));*/ /*метод сортирует числа по-
символьно.

 "-" - по знаку;
 101 - по первой цифре и второй
 13 - находит первую цифру и сравнивает вторую
 и так далее.*/
 /*(a, b) => a - b;
 а = 12, b = 10, 12 - 10 = 2, положительное число -> a > b;
 а = 12, b = 12, 12 - 12 = 0, ноль -> a == b;
 а = 10, b = 12, 10 - 12 = -2, отрицательное число -> a < b;*/

// let users = [
// 	{name: 'Артем', age: 30},
// 	{name: 'Алина', age: 22},
// 	{name: 'Дмитрий', age: 25}
// 	];

// console.log(users.sort((a, b) => a.age - b.age));



// Создать объект со свойством value, в котором храниться
// массив 
// у объекта должен быть метод get_length, который
// возвращает длину
// у объекта должен быть метод avg, который возвращает
// среднее значение
// у объекта должен быть метод sum, который возвращает 
// сумму значений массива.

// const obj = {
// 	value : [1, 50, 14, 22, 15],
// 	get_length(){
// 		return this.value.length
// 	},
// 	sum(){
// 		let sum = 0;
// 		for (i = 0; i < this.get_length(); i++){
// 			sum += this.value[i];
// 		}
// 		return sum
// 	},
// 	avg(){
// 		return this.sum() / this.get_length()
// 	}
// }
// console.log(obj.get_length());
// console.log(obj.sum());
// console.log(obj.avg());
 


 
/*Процесс взаимодействия с документом javascript*/
/*document - глобальный объект в javascript, через который
мы можем обратиться в файлу html.
Какие манипуляции мы можем с ним делать:

для того чтобы обратиться к какому либо элементу
в html необходимо выполнить
*/
// const pElem = document.querySelector('#text');
// const pElemArray = document.querySelectorAll('p');
// const textArray = ['Стул', 'Стол', 'Кровать', 'Машина', 'Танк']

/*Есть устаревшие способы получения элементов:
 - getElementById('id') возвращает один первый элемент с id;
 - getElementsById('id') возвращает все элементы с id;
 - getElementByTagName('TagName') возвращает один первый элемент с TagName;
 - getElementsByTagName('TagName'); возвращает все элементы с TagName
 - getElementByClassName('ClassName') возвращает один первый элемент с ClassName;
 - getElementsByClassName('ClassName'); возвращает все элементы с ClassName*/

// for (let i = 0; i < pElemArray.length; i++){
// 	console.log(pElemArray[i].innerText);
// }
// console.log(pElem.innerText); 

// Подставим вместо текста в html текст из созданного массива
// for (let i = 0; i < pElemArray.length; i++){
// 	pElemArray[i].innerText = textArray[i];
// }


// Заменить тексты из p.test с текстами span.

// const pElemTest = document.querySelectorAll('.test');
// const pElemSpan = document.querySelectorAll('span');

// for (let i = 0; i < pElemTest.length; i++){
// 	let reverse = pElemTest[i].innerText;
// 	pElemTest[i].innerText = pElemSpan[i].innerText;
// 	pElemSpan[i].innerText = reverse;
// }


// Написать скрипт, который считает сумму всех чисел
// из параграфов и выводит ее значение в консоль.

// const pElemSum = document.querySelectorAll('p');
// let sum = 0;
// for (i = 0; i < pElemSum.length; i++){
// 	sum += Number(pElemSum[i].innerText);
// }
// console.log(sum);

// Второй способ через неявное преобразование строк в числа.

// const pElemSum = document.querySelectorAll('p');
// let sum = 0;
// for (i = 0; i < pElemSum.length; i++){
// 	sum += +pElemSum[i].innerText;
// }
// console.log(sum);

// Создадим span и поместим в него значение суммы элементов p.

// const pElemSum = document.querySelectorAll('p');
// const spanElem = document.querySelector('#result');
// let sum = 0;
// for (i = 0; i < pElemSum.length; i++){
// 	sum += +pElemSum[i].innerText;
// }
// spanElem.innerText = sum;








// Занятие 5.

// "Обращение" к элементу с тегом "p".
// const pElem = document.querySelector('p');

// Внесение в тег "p" текста.
// pElem.innerText = 'Все будет прекрасно!'

// Создание элементов в "div#root".
// const divRoot = document.querySelector('#root');

// Мы добавляем параграф в div и он неявно создается в верстке.
// const pDivElem = document.createElement('p');

// Теперь этот элемент необходимо добавить для div.
// divRoot.appendChild(pDivElem);
// pDivElem.innerText = "И тут тоже все будет!"


/*const divRoot = document.querySelector('#root');
const toDo = ['Проснуться', 'Позавтракать', 'Побегать', 'Поработать', 'Поспать'];
const pColors = ['darkblue', 'yellow', 'green', 'gray', 'pink'];

function getRandomColors(pColors){
	const index = Math.round(Math.random()*(pColors.length-1));
	return pColors[index];
}	

for (i = 0; i < toDo.length; i++){
	const pElem = document.createElement('p');
	// Присовим стили нашим элементам.
	pElem.style.color = getRandomColors(pColors);
	pElem.style.backgroundColor = getRandomColors(pColors);
	pElem.innerText = toDo[i];
	divRoot.appendChild(pElem);
}*/
 

// Валидатор добавления элемента через форму input.

// const divRoot = document.querySelector('#root');
// const formElem = document.querySelector('form');
// const toDo = ['Проснуться', 'Позавтракать', 'Побегать', 'Поработать', 'Поспать'];	

// function render(){
// 	divRoot.innerText = '';
// 	for (i = 0; i < toDo.length; i++){
// 	const pElem = document.createElement('p');
// 	// Подключаем style.css к нашему элементу "p".
// 	pElem.classList.add('toDo');

// 	pElem.innerText = toDo[i];
// 	divRoot.appendChild(pElem);
// 	}
// }
// render();


// function form_handler(event){
// 	event.preventDefault()
// 	// Получаем значение из нашего поле input
// 	const inputElem = document.querySelector('#deal_input');
// 	const value = inputElem.value;
// 		if (value === ''){
// 			return
// 		} 
// 	toDo.push(inputElem.value);
// 	inputElem.value = '';
// 	render();
// }

// formElem.addEventListener('submit', form_handler);




// const formElem = document.querySelector('form');
// const array = [];

// function form_handler(event){
// 	event.preventDefault();
// 	const inputElem = document.querySelector('#value');
// 	const value = inputElem.value;
// 		if (value === ''){
// 			return
// 		}
// 	array.push(inputElem.value);
// 	inputElem.value = '';
// 	console.log(array);
// }

/*formElem.addEventListener('submit', form_handler);*/


