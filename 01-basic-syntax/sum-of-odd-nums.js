function solve(oddNums) {
	let sum = 0;
	let start = 1;
	let odds = 0;
	while (odds < oddNums) {
		if (start % 2 === 1) {
			console.log(start);
			sum += start;
			odds++;
		}
		start++;
	}
	console.log(`Sum: ${sum}`);
}

solve(5);
