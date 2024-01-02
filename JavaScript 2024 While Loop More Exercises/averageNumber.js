function averageNumber(input) {

    let n = Number(input[0]);
    let avg = 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        sum += num;
    }
    avg = sum / n;

    console.log(avg.toFixed(2));

}
averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);