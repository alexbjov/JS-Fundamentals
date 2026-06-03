function solve(totalPages, unitPagesHour, totalDays) {
	const timeToRead = totalPages / unitPagesHour;
	const timePerDay = timeToRead / totalDays;

	console.log(timePerDay);
}

solve(212, 20, 2);
solve(432, 15, 4);
