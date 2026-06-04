function solve(num) {
	let start = '<div class="chessboard">\n';
	let isBlack = true;

	for (let i = 1; i <= num; i++) {
		start += " <div>\n";
		for (let j = 1; j <= num; j++) {
			if (isBlack) {
				start += '  <span class="black"></span>\n';
			} else {
				start += '  <span class="white"></span>\n';
			}

			if (!(j === num && j % 2 === 0)) {
				isBlack = !isBlack;
			}
		}
		start += " </div>\n";
	}
	start += "</div>\n";
	console.log(start);
}

solve(5);
