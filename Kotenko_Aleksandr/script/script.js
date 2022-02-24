
//1
const obj_1 = {
	value : [12, 155, 5, 36, 124],
	max(){
		let max_i=[];
		max_i = this.value.sort((a,b)=> b-a);
		return max_i[0];
	},
	min(){
		let max_i=[];
		max_i = this.value.sort((a,b)=> a-b);
		return max_i[0];
	},
	count(){
		 return this.value.length;
	},
	avg(){
		let summ=0;
 	for (let i=0; i< this.count(); i++){
 		summ+=this.value[i];
 	};

 	return summ/this.count();
	}
};

console.log (obj_1.max());
console.log (obj_1.min());
console.log (obj_1.count());
console.log (obj_1.avg());


//2
const pElem = document.querySelector('#result');
const formElem = document.querySelector('form');


function form_summ(event){
	event.preventDefault();
	const inputElem = document.querySelector('#num_input');
	let value = Number(inputElem.value);
	if (isNaN(value)){
		alert('Введите число');
		return;
	}
	value=value+Number(pElem.innerText);
	pElem.innerText= value;
	
}
formElem.addEventListener('submit', form_summ);

//3


const elemForm_color = document.querySelector('#color_fon');
const conv_color_Elem = document.querySelector('#color_conv');

function div_colors(color) {
	const divElem = document.createElement('div');
	divElem.classList.add('colors_show');
	divElem.style.backgroundColor = color;
	divElem.innerText = color;
	conv_color_Elem.appendChild(divElem);
}

function form_color(event){
	event.preventDefault();
	const inputElem = document.querySelector('#color_input');
	const value = inputElem.value;
	if (value ===''){
		return;
	}
	div_colors(value);
	inputElem.value ='';
	
}
elemForm_color.addEventListener('submit', form_color);