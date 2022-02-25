const formElem = document.querySelector('form');
const numElem = document.querySelector('#num');
const resultElem = document.querySelector('#result');


function num_sum(event) {
	event.preventDefault();
	const re = /[^0-9]+/g;
	const value = numElem.value
	if(re.test(value) || value === ''){
		return
	}
	let sum_result = +numElem.value + +resultElem.innerText;
	resultElem.innerText = sum_result;
}

formElem.addEventListener('submit', num_sum);