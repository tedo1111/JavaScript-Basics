function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let finish = Number(input[1]);
    let magic = Number(input[2]);

    let counter = 0;
    let res = 0;

    for (let i = start; i <= finish; i++) {
        for (let j = start; j <= finish; j++) {
            res = i + j;
            counter++;
            if (((i + j) === magic)) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magic})`);
                return;
            }
        }
    }
    if (res !== magic) {
        console.log(`${counter} combinations - neither equals ${magic}`);

    }
}
sumOfTwoNumbers(["1", "10", "5"]);
sumOfTwoNumbers(["23", "24", "20"]);
sumOfTwoNumbers(["88", "888", "1000"]);
sumOfTwoNumbers(["88", "888", "2000"]);