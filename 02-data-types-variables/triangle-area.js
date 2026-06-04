function solve(sideA, sideB, sideC) {
	let s = (sideA + sideB + sideC) / 2;
	let area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

	console.log(area);
}

solve(2, 3.5, 4);
solve(3, 5.5, 4);
