function solve(num) {
	let sum = 0;
	let tempNum = num;
	while (tempNum > 0) {
		let remainder = tempNum % 10;
		tempNum = Math.floor(tempNum / 10);
		sum += remainder;
	}
	console.log(sum);
}

solve(245678);
solve(97561);
solve(543);
