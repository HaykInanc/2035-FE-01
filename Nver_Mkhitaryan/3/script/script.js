//3) В данном задании вам необходимо реализовать процесс отображения цвета по коду 
//(пример: #43d341).

//Добавьте в HTML страницу форму с полем ввода и кнопкой "Добавить". 
//Помимо этого ниже добавьте div с id "colors". Поле ввода должно принимать значение цвета.

//Напишите обработчик в javascript, который при submit формы забирает значение из поля ввода 
//и в div с id "colors" создает еще один div. У нового div в центре должен быть код цвета, 
//введенный пользователем, а цвет заднего фона нового div должен быть окрашен тем цветом, 
//который был получен из input элемент. 
//При добавлении нового элемента старые не должны пропадать.


const colors = document.querySelector('#colors');
const formElem = document.querySelector('form');

const colorHex = ['#fa0202','#040099','#fb9202'];

function backgroundColor(){
    colors.innerText = '';
    for(let i = 0; i< colorHex.length; i++){
        const block = document.createElement('div');
        block.classList.add('colorHex');
        
        if(colorHex[i]){
            block.style.background = colorHex[i];
            block.style.color = '#fff';
            block.innerText = colorHex[i];
        }
        
        colors.appendChild(block);   
    }
}
backgroundColor();

function form_handler(event){
    event.preventDefault();
    const inputElem = document.querySelector('#color_input');
    const value = inputElem.value;

    if(value === ''){
        return
    }
    colorHex.push(inputElem.value);
    inputElem.value = '';

    backgroundColor();
}

formElem.addEventListener('submit', form_handler);












