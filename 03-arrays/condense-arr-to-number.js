function solve(arrNums) {

    while (arrNums.length > 1) {
        let condenseArr = [];

        for (let i = 0; i < arrNums.length - 1; i++) {
            condenseArr.push(arrNums[i] + arrNums[i + 1]);
        }

        arrNums = condenseArr;
    }
    console.log(arrNums[0]);
}

solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);
