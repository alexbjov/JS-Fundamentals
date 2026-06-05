function solve(arrStr) {
	let arr = [];
	for (let i = 0; i < arrStr.length; i++) {
		let helpArr = arrStr[i].split(" ");
		arr.push(helpArr);
	}

	let sumDiagonal1 = 0;
	let sumDiagonal2 = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (i === j) {
				sumDiagonal1 += Number(arr[i][j]);
			}

			if (i + j === arr.length - 1) {
				sumDiagonal2 += Number(arr[i][j]);
			}
		}
	}

	if (sumDiagonal1 !== sumDiagonal2) {
		for (let i = 0; i < arr.length; i++) {
			console.log(arr[i].join(" "));
		}
	} else {
		for (let i = 0; i < arr.length; i++) {
			output = "";
			for (let j = 0; j < arr.length; j++) {
				if (i !== j && i + j !== arr.length - 1) {
					arr[i][j] = String(sumDiagonal1);
				}
				output += arr[i][j] + " ";
			}
			console.log(output);
		}
	}
}

// solve(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']
// );

solve(["1 1 1", "3 1 1", "1 1 0"]);
