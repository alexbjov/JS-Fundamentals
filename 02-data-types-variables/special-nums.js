function solve(num) {
	for (let i = 1; i <= num; i++) {
		let tempNum = i;
		let sum = 0;
		while (tempNum > 0) {
			let remainder = tempNum % 10;
			tempNum = Math.floor(tempNum / 10);
			sum += remainder;
		}

		let isSpecial = "False";
		if (sum === 5 || sum === 7 || sum === 11) {
			isSpecial = "True";
		}

		console.log(`${i} -> ${isSpecial}`);
	}
}

solve(15);
