function solve(numPeople, groupType, day) {
	let singlePrice = 0;

	if (day === "Friday") {
		if (groupType === "Students") {
			singlePrice = 8.45;
		} else if (groupType === "Business") {
			singlePrice = 10.9;
		} else if (groupType === "Regular") {
			singlePrice = 15;
		}
	} else if (day === "Saturday") {
		if (groupType === "Students") {
			singlePrice = 9.8;
		} else if (groupType === "Business") {
			singlePrice = 15.6;
		} else if (groupType === "Regular") {
			singlePrice = 20;
		}
	} else if (day === "Sunday") {
		if (groupType === "Students") {
			singlePrice = 10.46;
		} else if (groupType === "Business") {
			singlePrice = 16;
		} else if (groupType === "Regular") {
			singlePrice = 22.5;
		}
	}

	let totalPrice = singlePrice * numPeople;
	if (numPeople >= 30 && groupType === "Students") {
		totalPrice *= 0.85;
	} else if (numPeople >= 100 && groupType === "Business") {
		totalPrice -= 10 * singlePrice;
	} else if (numPeople >= 10 && numPeople <= 20 && groupType === "Regular") {
		totalPrice *= 0.95;
	}

	console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
