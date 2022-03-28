
const pElem = document.querySelector('#result')
const formElem = document.querySelector('form');
function form_handler(event) {
	event.preventDefault()
	const inputElem = document.querySelector('#deal_input')
    let sum_result = parseInt(inputElem.value) + +pElem.innerText
    pElem.innerText = sum_result
    inputElem.value = ''
}


formElem.addEventListener('submit', form_handler)


 
  
    