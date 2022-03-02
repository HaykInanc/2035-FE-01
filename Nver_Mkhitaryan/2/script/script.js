//2) В данном задании вам необходимо реализовать сумматор. 

//Добавьте в HTML страницу форму с полем ввода и кнопкой "Прибавить". 
//Помимо этого ниже добавьте параграф с id "result".

//Напишите обработчик в javascript, который при submit формы забирает 
//значение из поля ввода и прибавляет его к значению из параграфа "result". 
//Общий результат выводится в параграф "result".

//Процесс должен корректно работать только при вводе числа в поле формы, 
//иные сценарии поведения пользователя обрабатывать не нужно.


const result = document.querySelector('#result');
const formElem = document.querySelector('form');

const numArray = [];

function adder(){
    result.innerHTML = '';
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        const pElem = document.createElement('p');
        pElem.classList.add('numArray');
        sum += +numArray[i];
        pElem.innerText= Math.abs(sum)
        result.appendChild(pElem);      
    }       
}
adder();

function form_handler(event){
    event.preventDefault();
    const inputElem = document.querySelector('#num');
    const value = inputElem.value;
    if(value === ''){
        return
    }
    numArray.push(inputElem.value);
    inputElem.value = '';
    adder();

}

formElem.addEventListener('submit', form_handler);














