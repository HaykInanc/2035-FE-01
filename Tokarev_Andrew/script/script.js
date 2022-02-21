'use strict';

// 1) Написать функцию, которая получает массив из чисел в качестве аргумента и возвращает объект со следующими свойствами:
// - max со значением максимального числа
// - min со значением минимального числа
// - count со значением кол-ва элементов в массиве
// - avg со значением среднего 

const nums = [-7, 12, 108, -22, 0, 87, 25, 14];

function getArrayСalcData(nums) {

    const minMaxSum = nums.reduce((acc, val) => {
        acc[0] = (acc[0] === undefined || val < acc[0]) ? val : acc[0];
        acc[1] = (acc[1] === undefined || val > acc[1]) ? val : acc[1];
        acc[2] = (acc[2] === undefined ? 0 : acc[2]) + val;
        return acc;
    }, []);

    return {
        min: minMaxSum[0] || 0,
        max: minMaxSum[1] || 0,
        count: nums.length || 0,
        avg: nums.length ? minMaxSum[2] / nums.length : 0
    };
}

console.log(getArrayСalcData(nums));

// 2) В данном задании вам необходимо реализовать сумматор. 
// Добавьте на HTML страницу форму с полем ввода и кнопкой "Прибавить". Помимо этого ниже добавьте параграф с id "result".
// Напишите обработчик в javascript, который при submit формы забирает значение из поля ввода и прибавляет его к значению 
// из параграфа "result". Общий результат выводится в параграф "result". Процесс должен корректно работать только при вводе 
//числа в поле формы, иные сценарии поведения пользователя обрабатывать не нужно.

const formTotalizer = document.querySelector('.totalizer');

function formTotalizerHandler(event) {
    event.preventDefault();

    const inputElem = document.querySelector('#num_input'),
        resultElem = document.querySelector('#result');

    const value = +inputElem.value;
    if (isNaN(value)) {
        return;
    }
    resultElem.innerText = +resultElem.innerText + value;
    inputElem.value = '';
}

formTotalizer.addEventListener('submit', formTotalizerHandler);

// 3) В данном задании вам необходимо реализовать процесс отображения цвета по коду (пример: #43d341).
// Добавьте в HTML страницу форму с полем ввода и кнопкой "Добавить". Помимо этого ниже добавьте div 
//с id "colors". Поле ввода должно принимать значение цвета. Напишите обработчик в javascript, который 
//при submit формы забирает значение из поля ввода и в div с id "colors" создает еще один div. У нового 
//div в центре должен быть код цвета, введенный пользователем, а цвет заднего фона нового div должен 
//быть окрашен тем цветом, который был получен из input элемент. При добавлении нового элемента старые 
//не должны пропадать.

const formColors = document.querySelector('.colors_form');

function formColorsHandler(event) {
    event.preventDefault();

    const inputElem = document.querySelector('#color_input'),
        colorsElem = document.querySelector('#colors');

    const value = inputElem.value.trim();

    decorateElement(inputElem);

    if (value === '') {
        return;
    }

    if (testColorCode(value)) {
        addColorCard(value, colorsElem);
        inputElem.value = '';
    } else {
        decorateElement(inputElem, "red", "line-through");
    }
}

function addColorCard(value, colorsElem, className = 'color_card') {

    const divElem = document.createElement('div');
    divElem.style.backgroundColor = value;
    divElem.innerText = value;
    divElem.classList.add(className);

    colorsElem.appendChild(divElem);
}

function testColorCode(value) {
    const pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return pattern.test(value);
}

function decorateElement(elem, color = "white", textDecor = "none") {
    elem.style.backgroundColor = color;
    elem.style.textDecoration = textDecor;
}

formColors.addEventListener('submit', formColorsHandler);