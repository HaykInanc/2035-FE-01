let array = [2, 3, 5, 6, 7, 8];



function firstE (array){
    let max = getMaxElement(array);
    let min = getMinElement(array);
    let countNumber = getCountElement(array);
    let avgNumber = getAvgNumber(array);
    let obj=[];
    obj.max=max;
    obj.min=min;
    obj.countNumber=countNumber;
    obj.avgNumber=avgNumber;
    return obj;
}


function getMaxElement(array) {
    if (array.length == 0) {
        return null;
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i])
            max = array[i];

    }
    return max;


}

function getMinElement(array) {
    if (array.length == 0) {
        return null;
    }
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (min > array[i])
            min = array[i];

    }
    return min;
}

function getCountElement(array) {
    if (array.length == 0) {
        return null;
    }
    let countNumber = 0;
    for (let i = 0; i < array.length; i++) {
        countNumber ++;

    }
    return countNumber;
}

function getAvgNumber(array) {
    if (array.length == 0) {
        return null;
    }
    let avgNumber = 0;
    for (let i = 0; i < array.length; i++) {
        avgNumber=+array[i];

    }
    avgNumber=avgNumber/array.length;
    return avgNumber;
}

let e = firstE(array);
console.log(e);

function addition() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let sum = num1 + num2;
    console.log(sum);      
    document.getElementById("resultat").innerHTML =sum;
    }

function color(){
    
    const num1 = document.getElementById('num3').value;
    const summm=document.getElementById("colorbox");  
    //summm.style.background = num1;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = num1;
    newDiv.style.background = num1;
    summm.append(newDiv);
    
    
    
}
