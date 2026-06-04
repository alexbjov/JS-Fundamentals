function solve(arr1, arr2) {
	for (let item1 of arr1) {
		for (let item2 of arr2) {
			if (item1 === item2) {
				console.log(item1);
				break;
			}
		}
	}
}

solve(
	["Hey", "hello", 2, 4, "Peter", "e"],
	["Petar", 10, "hey", 4, "hello", "2"]
);
console.log("-------------------------------");
solve(["S", "o", "f", "t", "U", "n", "i", " "], ["s", "o", "c", "i", "a", "l"]);
