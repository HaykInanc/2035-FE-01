let numMass = [21, 98, 312, 41, 4, 71, 30, 65, 16, 2];
let max = numMass[0];
let min = numMass[0];
let avg = 0;

for(i=0; i<numMass.length; i++){
	if(numMass[i]>max){
		max = numMass[i];
	}
}
console.log(max);

for(i=0; i<numMass.length; i++){
	if(min>numMass[i]){
		min = numMass[i];
	}
}
console.log(min);

let count = numMass.length;
console.log(count);

for(let i = 0; i < numMass.length; i++){
	avg += numMass[i];
}
console.log(avg / count);