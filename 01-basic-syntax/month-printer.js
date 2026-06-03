function solve(monthNum) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	if (monthNum >= 0 && monthNum < months.length) {
		console.log(months[monthNum - 1]);
	} else {
		console.log("Error!");
	}
}

solve(3);
solve(7);
solve(15);
