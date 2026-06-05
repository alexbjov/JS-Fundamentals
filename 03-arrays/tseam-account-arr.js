function solve(arr) {
	let games = arr.shift().split(" ");

	let index = 0;
	while (arr[index] !== "Play!") {
		let item = arr[index].split(" ");

		if (item[0] === "Install" && !games.includes(item[1])) {
			games.push(item[1]);
			// console.log("Installed game:", item[1]);
		} else if (item[0] === "Uninstall" && games.includes(item[1])) {
			let i = games.indexOf(item[1]);
			games.splice(i, 1);
			// console.log("Uninstalled game:", item[1]);
		} else if (item[0] === "Update" && games.includes(item[1])) {
			let i = games.indexOf(item[1]);
			let elem = games[i];
			games.splice(i, 1);
			games.push(elem);
			// console.log("Updated game:", elem);
		} else if (item[0] === "Expansion") {
			let target = item[1].split("-");
			let i = games.indexOf(target[0]);
			if (games.includes(target[0])) {
				games.splice(i + 1, 0, target.join(":"));
			}
			// console.log("Expanded game:", target);
		}

		index++;
	}
	console.log(games.join(" "));
}

// solve(['CS WoW Diablo',
//     'Install LoL',
//     'Uninstall WoW',
//     'Update Diablo',
//     'Expansion CS-Go',
//     'Play!']);
solve([
	"CS WoW Diablo",
	"Uninstall XCOM",
	"Update PeshoGame",
	"Update WoW",
	"Expansion Civ-V",
	"Play!"
]);
