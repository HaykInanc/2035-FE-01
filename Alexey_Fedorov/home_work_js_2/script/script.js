// Задача 1


function lst(n , m){
	let res = [];
	let start = (n > m) ? m: n;
	let end = (n < m) ? m:n;
	for (let i = start; i<=end; i++){
		res.push(i);
	}
	return res
}
const get_res = {
	value :lst(2,5),
	count(){
		let len = this.value.length;
		return len;
	},
	max(){
		return this.value.sort((a,b) => b-a) [0];
	},
	min(){
		return this.value.sort((a,b) => a-b) [0];
	},
	sum(){
		let sum = 0;
		for(i = 0; i < this.count(); i++){
			 sum += this.value[i];
		}
		return sum
	},
	avg(){
		return this.sum() / this.count();
	}

}
console.log(get_res.count());
console.log(get_res.max());
console.log(get_res.min());
console.log(get_res.avg());



// Задача 2

const pElem = document.querySelector('#result');
const formElem = document.querySelector('#sum');


function p_value(){
	let input_p = document.querySelector('#num_input');
	let value_p = + input_p.value;
	pElem.innerText = value_p;
}
p_value();

function sum(){
	const inputElem = document.querySelector('#num_input');
	const value_inp = + inputElem.value;
	const value_p = + pElem.innerText;
	let res = value_inp + value_p;
	pElem.innerText = res
	inputElem.value = '';	
}

formElem.addEventListener('submit',function(event){
	event.preventDefault();
	sum();
});


// Задача 3

const colors = document.querySelector('#colors');
const formColor = document.querySelector('#get_color');
const divs = [];

function render(){
	colors.innerText = '';
	for(let i = 0; i < divs.length; i++){
		const divElem = document.createElement('div');
		divElem.classList.add('change_color');
		divElem.innerText = divs[i];
		divElem.style.backgroundColor = divs[i];
		colors.appendChild(divElem);
	}		
}

function form_handler(event){
	event.preventDefault();
	const inpElem = document.querySelector('#num_color');
	const value_1 = inpElem.value;
	if(value_1 === ''){
		return
	}
	divs.push(inpElem.value);
	render();
}

formColor.addEventListener('submit',form_handler);



