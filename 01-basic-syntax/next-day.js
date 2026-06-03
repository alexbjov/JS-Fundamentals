function solve(year, month, day) {
	let nextDate = new Date(year, month - 1, day + 1);
	nextDay = nextDate.getDate();
	nextMonth = nextDate.getMonth() + 1;
	nextYear = nextDate.getUTCFullYear();
	console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

solve(2016, 9, 30);
