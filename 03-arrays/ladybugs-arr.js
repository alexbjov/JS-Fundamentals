function solve(arr) {
	let size = arr.shift();
	let indexes = [];
	if (arr[0].length === 1) {
		let elem = arr.shift();
		indexes.push(Number(elem));
	} else {
		indexes = arr.shift().split(" ");
	}

	let field = Array(size).fill(0);
	for (let i = 0; i < indexes.length; i++) {
		let position = Number(indexes[i]);
		if (position >= 0 && position < field.length) {
			field[position] = 1;
		}
	}

	let index = 0;
	while (index < arr.length) {
		let commands = arr[index].split(" ");
		let position = Number(commands[0]);
		let direction = commands[1];
		let numOfMoves = Number(commands[2]);

		if (position >= 0 && position < field.length) {
			if (field[position] === 1) {
				field[position] = 0;
				let newPosition = 0;
				if (direction === "right") {
					newPosition = position + numOfMoves;
					while (newPosition >= 0 && newPosition < field.length) {
						if (field[newPosition] === 0) {
							field[newPosition] = 1;
							break;
						}

						if (numOfMoves >= 0) {
							newPosition += numOfMoves;
						} else {
							newPosition -= numOfMoves;
						}
					}
				} else if (direction === "left") {
					newPosition = position - numOfMoves;
					while (newPosition >= 0 && newPosition < field.length) {
						if (field[newPosition] === 0) {
							field[newPosition] = 1;
							break;
						}

						if (numOfMoves >= 0) {
							newPosition -= numOfMoves;
						} else {
							newPosition += numOfMoves;
						}
					}
				}
			}
		}
		index++;
	}
	console.log(field.join(" "));
}

// solve([3, '0 1', '0 right 1', '2 right 1']);
// solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
solve([5, "3", "3 left 2", "1 left -2"]);
