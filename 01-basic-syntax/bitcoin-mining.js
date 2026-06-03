function solve(arr) {
	let totalMoneyGold = 0;
	let bitcoins = 0;
	let firstDay = 0;
	let counter = 1;
	for (let shiftGold of arr) {
		let moneyGold = shiftGold * 67.51;
		if (counter % 3 === 0) {
			moneyGold *= 0.7;
		}
		totalMoneyGold += moneyGold;

		while (totalMoneyGold > 11949.16) {
			totalMoneyGold -= 11949.16;
			bitcoins++;
			if (bitcoins === 1) {
				firstDay = counter;
			}
		}
		counter++;
	}

	console.log(`Bought bitcoins: ${bitcoins}`);
	if (bitcoins > 0) {
		console.log(`Day of the first purchased bitcoin: ${firstDay}`);
	}
	console.log(`Left money: ${totalMoneyGold.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
// solve([3124.15, 504.212, 2511.124]);
// solve([50, 100]);
