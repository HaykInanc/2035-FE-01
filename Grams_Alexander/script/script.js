//Задача 1
const numbers = [24, 56, 31, 94, 11, 43, 74, 85, 23];




function creating(num) {
	let max = num.sort((a,b)=>b-a)[0];
	let min = num.sort((b,a)=>b-a)[0];
	let count = num.length;
	let sum = 0;
	for (let i = 0; i < count; i++) {
		sum += num[i];
	};
	let avg = sum / count;
	let result = {
		max: max,
		min: min,
		count: count,
		avg: avg,
	};
	return result;
};

let object = creating(numbers);

console.log(object);

//Задача 2
const result = document.querySelector(`#result`);
const formElem = document.querySelector(`#form1`);

function render(n){
	let x = Number(result.innerText);
	let y = Number(n);
	x += y;
	result.innerText = x;
};

function form_handler(event){
	event.preventDefault();
	const inputElem = document.querySelector(`#deal_input`);
	const value = inputElem.value;
	if (isFinite(value)){
		render(Math.round(value));
		inputElem.value = ``;
	}else{
		inputElem.value = ``;
		return;
	};
};

formElem.addEventListener(`submit`, form_handler);

//задача 3
const color = document.querySelector(`#colors`);
const formElem2 = document.querySelector(`#form2`);

function render2 (n) {
	const divElem = document.createElement(`div`);
	divElem.innerText = n;
	divElem.style.backgroundColor = n;
	colors.appendChild(divElem);
};

function form_handler2(event) {
	event.preventDefault();
	const inputElem = document.querySelector(`#deal_input_2`);
	const value = inputElem.value;
	render2(value);
	inputElem.value = ``;
};

formElem2.addEventListener(`submit`, form_handler2);