function sortNums(a, b, c) {
	let max = 0;
	let min = 0;
	let mid = 0;

	if (a >= b) {
		max = a;
		min = b;
	} else {
		max = b;
		min = a;
	}

	if (c <= max && c >= min) {
		mid = c;
	} else if (c > max) {
		mid = max;
		max = c;
	} else if (c < min) {
		mid = min;
		min = c;
	}

	console.log(max);
	console.log(mid);
	console.log(min);
}

sortNums(2, 1, 3);
// sortNums(-2, 1, 3);
// sortNums(0, 0, 2);
