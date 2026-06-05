function solve(arrCommands) {
	let newArr = [];
	let num = 1;

	for (command of arrCommands) {
		if (command === "add") {
			newArr.push(num);
		} else if (command === "remove") {
			if (newArr.length > 0) {
				newArr.pop();
			}
		}
		num++;
	}

	if (newArr.length === 0) {
		console.log("Empty");
	} else {
		console.log(newArr.join(" "));
	}
}

solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
