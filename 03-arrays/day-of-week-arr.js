function solve(day) {
    let weekArr = ["Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"];

    if (day >= 1 && day <= 7) {
        console.log(weekArr[day - 1]);
    } else {
        console.log("Invalid day!");
    }
}

solve(3);
solve(6);
solve(11);
