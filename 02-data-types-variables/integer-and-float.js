function solve(num1, num2, num3) {
	const sum = num1 + num2 + num3;
	const result = sum % 1 === 0 ? "Integer" : "Float";
	console.log(`${sum} - ${result}`);
}

solve(9, 100, 1.1);
solve(100, 200, 303);
