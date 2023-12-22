function equalPairs(input) {

    let num = Number(input[0]);

    let currSum = 0;
    let prevSum = 0;
    let diff = 0;
    let maxDiff = 0;


    for (let i = 1; i <= num * 2; i += 2) {
        let num1 = Number(input[i])
        let num2 = Number(input[i + 1])

        currSum = num1 + num2;

        if (i > 1) {
            diff = Math.abs(currSum - prevSum);
        }

        if (diff > maxDiff) {
            maxDiff = diff;
        }
        prevSum = currSum;
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${currSum}`);
    }
    else {
        console.log(`No, maxdiff=${maxDiff}`);
    }


}
equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
equalPairs(["2", "-1", "0", "0", "-1"]);
equalPairs(["2", "1", "2", "2", "2"]);
equalPairs(["1", "5", "5"]);
equalPairs(["2", "-1", "2", "0", "-1"]);
