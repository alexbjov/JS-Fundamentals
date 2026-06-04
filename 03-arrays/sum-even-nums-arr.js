function solve(arrStr) {
    let sum = 0;

    for (let i = 0; i < arrStr.length; i++) {
        let num = Number(arrStr[i]);
        if (num % 2 === 0) {
            sum += num;
        }
    }

    console.log(sum);
}

solve(['1', '2', '3', '4', '5', '6']);
solve(['3', '5', '7', '9']);
solve(['2', '4', '6', '8', '10']);
