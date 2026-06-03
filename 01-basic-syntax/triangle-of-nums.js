function solve(num) {
	let output = "";

	for (let i = 1; i <= num; i++) {
		let j = 1;
		while (j <= i) {
			output += i + " ";
			if (j === i) {
				console.log(output);
				output = "";
				break;
			}
			j++;
		}
	}
}

// solve(3);
// solve(5);
solve(6);
