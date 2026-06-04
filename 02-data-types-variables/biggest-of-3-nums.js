function solve(num1, num2, num3) {
	let maxNum = num1;

	if (num2 >= maxNum) {
		maxNum = num2;
	}
	if (num3 >= maxNum) {
		maxNum = num3;
	}
	console.log(maxNum);
}

solve(-2, 7, 3);
solve(130, 5, 99);
solve(43, 43.2, 43.1);
solve(2, 2, 2);
