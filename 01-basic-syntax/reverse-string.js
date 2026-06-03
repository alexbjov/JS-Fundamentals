function solve(newWord) {
	let reversedWord = "";
	for (let ind = newWord.length - 1; ind >= 0; ind--) {
		reversedWord += newWord[ind];
	}
	console.log(reversedWord);
}

solve("Hello");
solve("SoftUni");
solve("1234");
