function solve(char1, char2, char3) {
    const text = char3 + char2 + char1;

    let charNums = "";
    for (let i = 0; i < text.length; i++) {
        charNums += text.charCodeAt(i) + " ";
    }

    console.log(text);
    console.log(charNums);
}

solve("a", "b", "c");
solve('%', '2', 'o');
solve('1', '5', 'p');
