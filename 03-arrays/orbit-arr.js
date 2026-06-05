function solve(data) {
	let width = data[0];
	let height = data[1];
	let x = data[2];
	let y = data[3];

	let arr = new Array(height);
	for (let i = 0; i < height; i++) {
		arr[i] = new Array(width);
		arr[i].fill(0);
	}

	let xUp = x - 1;
	let xDown = x + 1;
	let yLeft = y - 1;
	let yRight = y + 1;

	let isTopReached = false;
	let isBottomReached = false;
	let isLeftReached = false;
	let isRightReached = false;

	if (xUp < 0) {
		isTopReached = true;
		xUp = 0;
	}

	if (xDown > arr.length - 1) {
		isBottomReached = true;
		xDown = arr.length - 1;
	}

	if (yLeft < 0) {
		isLeftReached = true;
		yLeft = 0;
	}

	if (yRight > arr[0].length - 1) {
		isRightReached = true;
		yRight = arr[0].length - 1;
	}

	arr[x][y] = 1;
	let startNum = 2;
	// let maxNum = 1 + Math.max(Math.abs(Math.min(x, y, 0) - width),
	// Math.abs(Math.min(x, y, 0) - height));

	let maxNum = Math.max(height, width);

	while (startNum <= maxNum) {
		for (let i = xUp; i <= xDown; i++) {
			if (isLeftReached && isRightReached) break;
			if (!isLeftReached) arr[i][yLeft] = startNum;
			if (!isRightReached) arr[i][yRight] = startNum;
		}

		for (let j = yLeft; j <= yRight; j++) {
			if (isTopReached && isBottomReached) break;
			if (!isTopReached) arr[xUp][j] = startNum;
			if (!isBottomReached) arr[xDown][j] = startNum;
		}

		if (xUp <= 0) {
			isTopReached = true;
		} else {
			xUp--;
		}

		if (xDown >= arr.length - 1) {
			isBottomReached = true;
			xDown = arr.length - 1;
		} else {
			xDown++;
		}

		if (yLeft <= 0) {
			isLeftReached = true;
			yLeft = 0;
		} else {
			yLeft--;
		}

		if (yRight >= arr[0].length - 1) {
			isRightReached = true;
			yRight = arr[0].length - 1;
		} else {
			yRight++;
		}

		startNum++;
	}

	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i].join(" "));
	}
}

solve([5, 5, 2, 2]);
