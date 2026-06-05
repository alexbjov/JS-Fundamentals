function solve(rows, cols) {
	let arr2D = new Array(rows);
	for (let i = 0; i < rows; i++) {
		arr2D[i] = new Array(cols);
	}

	const maxNum = rows * cols;
	let startNum = 1;

	let startX = 0;
	let endX = rows - 1;
	let startY = 0;
	let endY = cols - 1;
	let isMaxReached = false;

	while (startNum <= maxNum) {
		for (let j = startY; j <= endY; j++) {
			arr2D[startX][j] = startNum;
			if (startNum === maxNum) {
				isMaxReached = true;
				break;
			}
			startNum++;
		}

		if (isMaxReached) {
			break;
		}

		for (let i = startX + 1; i <= endX; i++) {
			arr2D[i][endY] = startNum;
			if (startNum === maxNum) {
				isMaxReached = true;
				break;
			}
			startNum++;
		}

		if (isMaxReached) {
			break;
		}

		for (let j = endY - 1; j >= startY; j--) {
			arr2D[endX][j] = startNum;
			if (startNum === maxNum) {
				isMaxReached = true;
				break;
			}
			startNum++;
		}

		if (isMaxReached) {
			break;
		}

		for (let i = endX - 1; i > startX; i--) {
			arr2D[i][startY] = startNum;
			if (startNum === maxNum) {
				isMaxReached = true;
				break;
			}
			startNum++;
		}

		if (isMaxReached) {
			break;
		}

		startX++;
		endX--;
		startY++;
		endY--;
	}

	for (let i = 0; i < rows; i++) {
		let output = "";
		for (let j = 0; j < cols; j++) {
			output += arr2D[i][j] + " ";
		}
		console.log(output);
	}
}

solve(5, 5);
// solve(3, 3);
