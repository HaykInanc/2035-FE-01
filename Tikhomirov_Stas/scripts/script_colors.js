const formElem = document.querySelector("#form_colors"); 
const colorsBranch = document.querySelector("#colors"); 
 
function form_handler(event) { 
  event.preventDefault(); 
  const inputElem = document.querySelector("#input"); 
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
 
formElem.addEventListener("submit", form_handler); 