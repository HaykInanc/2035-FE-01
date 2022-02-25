const formElem = document.querySelector('form');
const colors = document.querySelector('#colors');
const colorInput = document.querySelector('#colorinput');

function changeColor(event) {
	event.preventDefault();
	if (colorInput.value === ''){
		return
	}
	const divELem = document.createElement('div')
	colors.appendChild(divELem);
	divELem.style.backgroundColor = '#' + colorInput.value;
	divELem.innerText = colorInput.value;
	colorInput.value = '';
}

formElem.addEventListener('submit', changeColor);