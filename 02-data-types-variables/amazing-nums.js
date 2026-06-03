function solve(num) {
	let tempNum = num;
	let sum = 0;

	while (tempNum > 0) {
		let remainder = tempNum % 10;
		sum += remainder;
		tempNum = Math.floor(tempNum / 10);
	}

	const isAmazing = sum.toString().includes("9");
	const output = isAmazing ? "True" : "False";

	console.log(`${num} Amazing? ${output}`);
}

solve(1233);
solve(999);
