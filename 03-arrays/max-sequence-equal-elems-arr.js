function solve(arr) {
	let firstNum = arr[0];
	let newSeq1 = [];
	newSeq1.push(firstNum);
	let elems1 = -1;

	for (let i = 1; i < arr.length; i++) {
		if (firstNum === arr[i]) {
			elems1 = newSeq1.push(arr[i]);
		} else {
			firstNum = arr[i];
			break;
		}
	}

	let newSeq2 = [];
	let elems2 = newSeq2.push(firstNum);
	let position = elems1;

	for (let j = position; j < arr.length; j++) {
		if (firstNum === arr[j]) {
			elems2 = newSeq2.push(arr[j]);
		} else {
			firstNum = arr[j];
			if (elems2 > elems1) {
				newSeq1 = newSeq2;
				position += elems2;
				elems1 = elems2;
			}
			newSeq2 = [];
			elems2 = newSeq2.push(arr[j]);
		}
	}
	console.log(newSeq1.join(" "));
}

solve([1, 1, 1, 2, 3, 1, 3, 3]);
// solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// solve([4, 4, 4, 4]);
// solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
