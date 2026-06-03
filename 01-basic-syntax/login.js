function solve(arr) {
	let username = arr[0];
	let password = username.split("").reverse().join("");

	let ind = 1;
	let numOfTry = 1;
	while (ind < arr.length) {
		let checkPassword = arr[ind];
		if (checkPassword === password) {
			console.log(`User ${username} logged in.`);
			break;
		}

		if (numOfTry === 4) {
			console.log(`User ${username} blocked!`);
		} else {
			console.log("Incorrect password. Try again.");
			numOfTry++;
		}
		ind++;
	}
}

solve(["Acer", "login", "go", "let me in", "recA"]);
solve(["momo", "omom"]);
solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
