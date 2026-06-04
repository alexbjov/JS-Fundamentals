function solve(roomsStr) {
	let health = 100;
	let coins = 0;
	let isAlive = true;
	let rooms = roomsStr.split("|");
	let bestRoom = 1;

	for (let i = 0; i < rooms.length; i++) {
		let specificData = rooms[i].split(" ");
		if (specificData[0] === "potion") {
			health += Number(specificData[1]);
			if (health > 100) {
				console.log(
					`You healed for ${Number(specificData[1]) - (health - 100)} hp.`
				);
				health = 100;
			} else {
				console.log(`You healed for ${specificData[1]} hp.`);
			}
			console.log(`Current health: ${health} hp.`);
		} else if (specificData[0] === "chest") {
			coins += Number(specificData[1]);
			console.log(`You found ${specificData[1]} coins.`);
		} else {
			health -= Number(specificData[1]);
			if (health > 0) {
				console.log(`You slayed ${specificData[0]}.`);
			} else {
				console.log(`You died! Killed by ${specificData[0]}.`);
				console.log(`Best room: ${bestRoom}`);
				return;
			}
		}
		bestRoom++;
	}

	if (isAlive) {
		console.log(`You've made it!`);
		console.log(`Coins: ${coins}`);
		console.log(`Health: ${health}`);
	}
}

solve("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
