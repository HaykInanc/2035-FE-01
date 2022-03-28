// В данном домашнем задании мы отработаем основные конструкции и операторы, которые мы успели пройти. 

// Необходимо создать одну страницу с JS файлом и в нем решить ряд задач.



// 1) Написать функцию, которая получает массив из чисел в качестве аргумента и возвращает объект со следующими свойствами:
// - max со значением максимального числа
// - min со значением минимального числа
// - count со значением кол-ва элементов в массиве
// - avg со значением среднего 

// В этом задании нельзя использовать объект Math



// 2) В данном задании вам необходимо реализовать сумматор. 

// Добавьте в HTML страницу форму с полем ввода и кнопкой "Прибавить". Помимо этого ниже добавьте параграф 
//с id "result".

// Напишите обработчик в javascript, который при submit формы забирает значение из поля ввода 
//и прибавляет его к значению из параграфа "result". Общий результат выводится в параграф "result".

// Процесс должен корректно работать только при вводе числа в поле формы, иные сценарии поведения 
//пользователя обрабатывать не нужно.



// 3) В данном задании вам необходимо реализовать процесс отображения цвета по коду (пример: #43d341).

// Добавьте в HTML страницу форму с полем ввода и кнопкой "Добавить". Помимо этого ниже добавьте div с 
//id "colors". Поле ввода должно принимать значение цвета.

// Напишите обработчик в javascript, который при submit формы забирает значение из поля ввода 
//и в div с id "colors" создает еще один div. У нового div в центре должен быть код цвета, 
//введенный пользователем, а цвет заднего фона нового div должен быть окрашен тем цветом, 
//который был получен из input элемент. При добавлении нового элемента старые не должны пропадать.

// Помимо загрузки решения на данный ресурс необходимо сделать pull request в проект https://github.com/HaykInanc/2035-FE-01. Вам необходимо сделать fork создать папку со своей фамилией и именем через нижнее подчеркивание (пример: Inants_Hayk) загрузить туда свой проект и сделать pull request.

// 1)
	
 	let obj = {
 		value : [5, 12, 1, 10,123],
 		get_sort(){
 			return this.value.sort((a,b) => a-b)
 		},
 		get_length(){
 			return this.value.length
 		},

 		get_min(){
 			return this.value[0]
 		}, 
 	    get_max(){
 			return this.value[this.value.length-1]
 		}, 
 		
 		sum(){
	 		let result = 0;
	 		for (let i = 0; i < this.get_length(); i++){
	        result += this.value[i]
	    	}
	    	return result;
		},
 		get_avg(){
 			return this.sum()/this.get_length();
 		}
	 };
	 
	 	console.log(obj.get_sort())
	 	console.log(obj.get_length())
		console.log(obj.get_min())
		console.log(obj.get_max())
		console.log(obj.sum())
		console.log(obj.get_avg())


//2)

const pElem = document.querySelector('#result');
const formElem = document.querySelector('form');


function summ(event){
	event.preventDefault();
	const inputElem = document.querySelector('#input');
	let value = Number(inputElem.value);
	if (isNaN(value)){
		alert('Введите число');
		return;
	}
	value_2 = value + Number(pElem.innerText);
	pElem.innerText= value_2;
	
}
formElem.addEventListener('submit',summ);


// 3)

const elemFormColor = document.querySelector('#color_bg');
const resultColorElem = document.querySelector('#color_result');



function result_colors(color) {	
	let divElem = document.createElement('div');
	divElem.classList.add('colors');
	divElem.style.backgroundColor = color;
	divElem.innerText = color;
	resultColorElem.appendChild(divElem);
}

function color(event){
	event.preventDefault();
	const inputElem = document.querySelector('#input_num_color');
	let value = inputElem.value;
	if (value ===''){
		return;
	}
	result_colors(value);
	inputElem.value ='';
	
}
elemFormColor.addEventListener('submit', color);

