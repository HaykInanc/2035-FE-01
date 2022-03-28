const formElem = document.querySelector('form')
const colors = document.querySelector('#colors')

function render(n){
    const divElem = document.createElement('div')
    divElem.classList.add('permanent_color')
    colors.appendChild(divElem)
    divElem.style.backgroundColor = n


}
function from_handler(event) {
	event.preventDefault()
	const inputElem = document.querySelector('#deal_input')
    const value = inputElem.value
	render(value)
    inputElem.value = ''
}
formElem.addEventListener('submit', from_handler) 
