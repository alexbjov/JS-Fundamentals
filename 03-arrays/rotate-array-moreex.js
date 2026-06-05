function solve(arr) {
	let placesToMove = Number(arr.pop());

	if (placesToMove > arr.length) {
		placesToMove %= arr.length;
	}

	for (let i = 1; i <= placesToMove; i++) {
		let item = arr.pop();
		arr.unshift(item);
	}

	console.log(arr.join(" "));
}

solve(["1", "2", "3", "4", "2"]);
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
