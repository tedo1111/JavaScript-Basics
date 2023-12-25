function oddEvenPosition(input) {
    let nums = Number(input[0]);
    let oddMin = "No";
    let oddMax = "No";
    let oddSum = 0;
    let evenMin = "No";
    let evenMax = "No";
    let evenSum = 0;

    for (let i = 1; i <= nums; i++) {
        let currNum = Number(input[i]);

        if (i % 2 === 0) {  // Even position
            evenSum += currNum;

            if (evenMax === "No" || currNum > evenMax) {
                evenMax = currNum.toFixed(2);
            }
            if (evenMin === "No" || currNum < evenMin) {
                evenMin = currNum.toFixed(2);
            }
        } else {  // Odd position
            oddSum += currNum;

            if (oddMax === "No" || currNum > oddMax) {
                oddMax = currNum.toFixed(2);
            }
            if (oddMin === "No" || currNum < oddMin) {
                oddMin = currNum.toFixed(2);
            }
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);
}

oddEvenPosition(["6", "2", "3", "5", "4", "2", "1"]);
oddEvenPosition(["5", "3", "-2", "8", "11", "-3"]);
oddEvenPosition(["2", "1.5", "-2.5"]);
oddEvenPosition(["4", "1.5", "1.75", "1.5", "1.75"]);
oddEvenPosition(["1", "1"]);
oddEvenPosition(["1", "-5"]);
oddEvenPosition(["0"]);
oddEvenPosition(["3", "-1", "-2", "-3"]);
