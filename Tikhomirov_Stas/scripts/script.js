// function func(arr) {
//     const count = arr.length;
//     const sort = arr.sort((a, b) => a - b);
//     let sum = 0;
//     for (let i=0; i < count; i++){
//         sum += arr[i];
//     }

//     return {
//         max: sort[count - 1],
//         min: sort[0],
//         count: count,
//         avg: sum / count
//     }
// }

// 2 задача

const formElem = document.querySelector("#form_number"); 
const resultBranch = document.querySelector("#result"); 
resultBranch.innerText = "0"; 
 
function form_handler(event) { 
  event.preventDefault(); 
  const inputElem = document.querySelector("#input_number"); 
  if (inputElem.value === "") { 
    return; 
  } 
  const num = parseInt(inputElem.value, 10);
  if (isNaN(num)){
  	inputElem.value = ""; 
  	return;
  }
  resultBranch.innerText = parseInt(resultBranch.innerText, 10) + num; 
  inputElem.value = ""; 
} 
 
formElem.addEventListener("submit", form_handler); 

// 3 задача

const formElem_colors = document.querySelector("#form_colors"); 
const colorsBranch = document.querySelector("#colors"); 
 
function form_handler_colors(event) { 
  event.preventDefault(); 
  const inputElem = document.querySelector("#input_colors"); 
  if (inputElem.value === "") { 
    return; 
  } 
  const newDivElem = document.createElement("div"); 
  newDivElem.innerText = inputElem.value; 
  newDivElem.style.backgroundColor = inputElem.value; 
  newDivElem.style.textAlign = "center";
  colorsBranch.appendChild(newDivElem); 
  inputElem.value = ""; 
} 
 
formElem_colors.addEventListener("submit", form_handler_colors); 
