//// first
function math_list(list){
	let lstObj= {};

	function minMax(list) {
		let lstSort = list.sort((a, b) => a - b);
		return [lstSort[0], lstSort[list.length - 1]]
		//можно было пойти сложным путем и пройти по какому-нибудь алгоритму поиска
	}

	function sum(list) {
		let sum = 0;
		for(let i = 0; i < list.length; i++){
			sum += list[i];
		}
		return sum;
	}

	[lstObj.min, lstObj.max] = minMax(list);
	lstObj.count = list.length;
	lstObj.avg = sum(list) / lstObj.count;
		
	return lstObj;
}

let lst = [4, 8, 1, 3, 16, 11, 34, 25, 2, 7];

console.log(lst);
console.log(math_list(lst));


////second
const formCount = document.querySelector('#form_count'); 

function formSum(event){
	event.preventDefault();
	const pElem = document.querySelector('#result');
	const inputElem = document.querySelector('#new_num');
	const value = inputElem.value;
	if (value === ''){
		return
	}
	let sumP = +pElem.innerText;
	sumP += parseInt(value);
	pElem.innerText = sumP;
	inputElem.value = '';
}

formCount.addEventListener('submit', formSum);

////fird
const formColor = document.querySelector('#form_color'); 
let divElem = document.querySelector('#colors');

const divList = [];

function render(){
	divElem.innerText = '';
	for(let i = 0; i < divList.length; i++){
		const dElem = document.createElement('div');
		dElem.innerText = divList[i];
		dElem.classList.add('colour');
		dElem.style.background = divList[i];
		if (divList[i] === 'black' || divList[i] === '#000000'){
			dElem.style.color = 'white';
		}		
		divElem.appendChild(dElem);
	}

}

function form_color(event){
	event.preventDefault();
	const inputElem = document.querySelector('#new_color');
	const value = inputElem.value;
	if (value === ''){
		return
	}
	divList.push(value);
	inputElem.value = '';
	render();
}

render();

formColor.addEventListener('submit', form_color);

