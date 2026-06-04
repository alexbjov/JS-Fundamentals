function solve(arrStr1, arrStr2) {

    let areIdentical = true;
    let sum = 0;
    let index = 0;

    for (let i = 0; i < arrStr1.length; i++) {
        if (arrStr1[i] !== arrStr2[i]) {
            index = i;
            areIdentical = false;
            break;
        } else {
            sum += Number(arrStr1[i]);
        }
    }

    if (areIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}

solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
solve(['1'], ['10']);
