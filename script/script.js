// const pElem = document.querySelector('p');
// pElem.innerText = 'vsem ptivet!';

// const root = document.querySelector('#root');
// const todo = ['проснуться', "поесть", "погулять", "поспать"];
// const colors = ['green', 'blue', 'yellow', ' pink'];


// function getRandColor(colors){
// 	const index = Math.random(Math.random()*(colors.length-1));
// 	return colors[index]
// }

// for (let i = 0; i < todo.length; i++){
// const pElem = document.createElement('p');
// pElem.style.color = getRandColor(colors);
// pElem.innerText = todo[i];
// root.appendChild(pElem);
// }

	  


// 	render();

	 function form_handler(event){
	 	event.preventDefault();
	 	const inputElem = document.querySelector('#deal_input');
		console.log(event)
		todo.push(inputElem.value);
		render();
	 }

	 formElem.addEventListener('submit', form_handler);