function solve(radius, height) {
	let base = radius ** 2 * Math.PI;
	let volume = (base * height) / 3;
	let area =
		radius * Math.PI * (radius + Math.sqrt(radius ** 2 + height ** 2));

	console.log("volume =", volume.toFixed(4));
	console.log("area =", area.toFixed(4));
}

solve(3, 5);
solve(3.3, 7.8);
