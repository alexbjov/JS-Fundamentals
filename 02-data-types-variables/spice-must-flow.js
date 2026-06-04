function solve(startingYield) {
	let days = 0;
	let amountExtracted = 0;
	let start = startingYield;

	while (start >= 100) {
		amountExtracted += start - 26;
		days++;
		start -= 10;
	}

	if (days > 0) {
		amountExtracted -= 26;
	}

	console.log(days);
	console.log(amountExtracted);
}

solve(111);
solve(450);
