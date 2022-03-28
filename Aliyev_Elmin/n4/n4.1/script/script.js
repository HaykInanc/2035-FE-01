const number = [80, 55, 77, 0, 87, 90];

function func(number) {
   const object = {};
   let sort = number.sort((a,b)=>a-b);
   object.max = sort[number.length-1];
   object.min = sort[0];
   object.count = number.length;
   let result = 0
   for (let i = 0; i < number.length; i++) {
   result += number[i]
   }
   object.avg = result/number.length
   return object
}
console.log(func(number))


