function solve(arr) {
	let newArr = [arr[0]];
	for (let i = 1; i < arr.length; i++) {
		let currentNum = arr[i];
		if (currentNum >= newArr[newArr.length - 1]) {
			newArr.push(currentNum);
		}
	}
	console.log(newArr.join(" "));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
