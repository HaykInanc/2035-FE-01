let massive=[11, 33, 55, 22, 44];

function mart() {
	let max=massive[0];
	for (let i = 0; i < massive.length; i++) {
		if (massive[i]>max){
		max=massive[i];
	 	}
	}return max

	let min=massive[0];
	for (let i = 0; i < massive.length; i++) {
		if (massive[i]<min){
		min=massive[i];
	 	}
	}return min

	let count=massive.length;
	return count
	
	let avg=0;

	for (let i = 0; i < massive.length; i++) {
	avg += massive[i];
	}return avg/massive.length
}
console.log (mart(massive))
