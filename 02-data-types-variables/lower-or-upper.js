function solve(myChar) {
	let charUpper = myChar.toUpperCase();
	if (charUpper === myChar) {
		console.log("upper-case");
	} else {
		console.log("lower-case");
	}
}

solve("L");
solve("f");
