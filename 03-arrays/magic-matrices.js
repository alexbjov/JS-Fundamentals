function solve(arr2D) {
	let isMagic = true;

	if (arr2D.length === 1 || arr2D[0].length === 1) {
		console.log(isMagic);
		return;
	}

	let arrSumRows = Array(arr2D.length).fill(0);
	let arrSumCols = Array(arr2D[0].length).fill(0);

	for (let i = 0; i < arr2D.length; i++) {
		let sumRows = 0;
		for (let j = 0; j < arr2D[i].length; j++) {
			sumRows += arr2D[i][j];
			arrSumCols[j] += arr2D[i][j];
		}
		arrSumRows[i] = sumRows;
	}

	if (arrSumRows.length === arrSumCols.length && arrSumRows.length > 0) {
		for (let i = 0; i < arrSumRows.length; i++) {
			for (let j = 0; j < arrSumCols.length; j++) {
				if (arrSumRows[i] !== arrSumCols[j]) {
					isMagic = false;
					break;
				}
			}
		}
	} else {
		isMagic = false;
	}
	console.log(isMagic);
}

solve([
	[4, 5, 6],
	[6, 5, 4],
	[5, 5, 5]
]);

solve([
	[11, 32, 45],
	[21, 0, 1],
	[21, 1, 1]
]);

solve([
	[1, 0, 0],
	[0, 0, 1],
	[0, 1, 0]
]);
