
function num(){
	const num = [23, 38, 17, 6, 5, 29, 34, 10];

	let max = num[0];
	for (let i = 0; i < num.length; i++){
		if(num[i] > max){
			max = num[i]
		};
	};
		return max;

	let min = num[0];
	for (let i = 0; i < num.length; i++){
		if(num[i] < min){
			min = num[i]
		};
	};
		return min;	

	let count = num.length;
		return count;

	let avg = 0;
	for(let i = 0; i < num.length; i++){
		avg += num[i]/num.length;
	};
		return avg;

}
console.log(num());

const result = document.querySelector('#result');
const formElem = document.querySelector('form');

const number = ['0'];

function render(){
	result.innerText = '';
	for( let i = 0; i < number.length; i++){
		const pElem = document.createElement('p');
		pElem.classList.add('number');
		pElem.innerText = number[i];
		result.appendChild(pElem);
	}
}
render();


function form_handler(event){
	event.preventDefault();
	const inputElem = document.querySelector('#input_field');
	const value = inputElem.value;
	if (value === ''){
		return
	}
	number.push(inputElem.value);
	inputElem.value = '';
	render();
}

formElem.addEventListener('submint', form_handler);







const colors = document.querySelector('#colors');
const divElem = document.querySelector('div');

const color = ['black', 'yellow'];

function getRandomColor(colors) {
	const index = Math.round(Math.random()*(colors.length-1));
	return colors[index];
}
divElem.style.color = getRandomColor(colors);
divElem.style.backgroundColor = getRandomColor(colors);


function render() {
	input.innerText = '';
	for( let i = 0; i < input.length; i++){
		const divElem = document.createElement('div');
		divElem.classList.add('color');
		divElem.innerText = color[i];
		colors.appendChild(divElem);
	}
}
render();

function form_handler(event){
	event.preventDefault();
	const inputElem = document.createElement('#input');
	const value = inputElem.value;
	if (value === '');{
		return
	}
	color.push(inputElem.value);
	inputElem.value = '';
	render();
}

divElem.addEventListener('button', form_handler);







































