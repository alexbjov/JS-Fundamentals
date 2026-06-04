function solve(arr) {
	let topNums = [];

	for (let i = 0; i < arr.length; i++) {
		let isTopNum = true;
		let currentNum = arr[i];

		for (let j = i + 1; j < arr.length; j++) {
			let numToRight = arr[j];
			if (currentNum < numToRight) {
				isTopNum = false;
				break;
			}
		}

		if (isTopNum) {
			topNums.push(currentNum);
		}
	}

	console.log(topNums.join(" "));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);
