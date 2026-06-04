function solve(arr) {
	let leftSum = 0;
	let rightSum = 0;
	let ind = 0;
	let isFound = false;

	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 1) {
			isFound = true;
			break;
		}

		if (i === 0) {
			leftSum = 0;
		} else {
			let j = 0;
			while (j < i) {
				leftSum += arr[j];
				j++;
			}
		}

		if (i === arr.length - 1) {
			rightSum = 0;
		} else {
			let k = i + 1;
			while (k < arr.length) {
				rightSum += arr[k];
				k++;
			}
		}

		if (leftSum === rightSum) {
			ind = i;
			isFound = true;
			break;
		} else {
			leftSum = 0;
			rightSum = 0;
		}
	}

	if (isFound) {
		console.log(ind);
	} else {
		console.log("no");
	}
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
