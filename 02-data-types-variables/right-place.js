function solve(word, missingChar, newWord) {
	let replacedWord = word.replace("_", missingChar);
	if (replacedWord === newWord) {
		console.log("Matched");
	} else {
		console.log("Not Matched");
	}
}

solve("Str_ng", "I", "Strong");
solve("Str_ng", "i", "String");
