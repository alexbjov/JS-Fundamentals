function solve(n, arr) {
    let reverseArr = [];
    for (let i = 0; i < n; i++) {
        reverseArr.push(arr[i]);
    }
    reverseArr.reverse();
    console.log(reverseArr.join(" "));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47])
