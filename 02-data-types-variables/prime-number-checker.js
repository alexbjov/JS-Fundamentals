function solve(num) {
	let isPrime = true;
	for (let i = 2; i <= num; i++) {
		if (num % i === 0 && num !== i) {
			isPrime = false;
			break;
		}
	}

	console.log(isPrime);
}

solve(7);
solve(8);
solve(81);
