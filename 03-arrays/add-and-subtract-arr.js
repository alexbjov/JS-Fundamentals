function solve(arr) {
	let newArr = [];

	let sumOriginal = 0;
	let newSum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			newArr.push(arr[i] + i);
		} else {
			newArr.push(arr[i] - i);
		}
		sumOriginal += arr[i];
		newSum += newArr[i];
	}

	console.log(newArr);
	console.log(sumOriginal);
	console.log(newSum);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
