//1) Написать функцию, которая получает массив из 
//чисел в качестве аргумента и возвращает объект со 
//следующими свойствами:

//- max со значением максимального числа

//- min со значением минимального числа

//- count со значением кол-ва элементов в массиве

  //- avg со значением среднего 


let list = {
   Arr:[4,7,1,5,8,12,6,55,2],
   max(){
       let max = this.Arr[0];
       for(i = 0; i<this.Arr.length; i++){
           if(this.Arr[i]>max){
               max = this.Arr[i];
            }
    }
        return max;
    },
   
    min(){
        let min = this.Arr[0];
        for(i = 0; i<this.Arr.length; i++){
            if(this.Arr[i]< min){
                min= this.Arr[i];
            }
    }
        return min;  
    },
    
    count(){
        return this.Arr.length;
    },
    
    avg(){
        let sum = 0;
        for(i = 0; i< this.count(); i++){
            sum+=this.Arr[i];
        }
        return sum / this.count()
    }      
}

console.log(list.max());
console.log(list.min());
console.log(list.count());
console.log(list.avg());

