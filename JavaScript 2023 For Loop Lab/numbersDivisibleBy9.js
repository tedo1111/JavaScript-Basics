function numbersDivisibleBy9(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let sum = 0;

    for (let index = num1; index <= num2; index++) {
        if (index % 9 === 0) {
            let nums = Number([index]);

            sum += nums;

        }
    }
    console.log(`The sum: ${sum}`);


    for (let index2 = num1; index2 <= num2; index2++) {
        if (index2 % 9 === 0) {
            console.log(index2);
        }
    }

}
numbersDivisibleBy9(["100", "200"])