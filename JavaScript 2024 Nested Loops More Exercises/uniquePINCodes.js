function uniquePINCodes(input) {

    let num1Max = Number(input[0]);
    let num2Max = Number(input[1]);
    let num3Max = Number(input[2]);

    for (let num1 = 2; num1 <= num1Max; num1 += 2) {
        for (let num2 = 2; num2 <= num2Max; num2++) {
            if (num2 === 2 || num2 === 3 || num2 === 5 || num2 === 7) {
                for (let num3 = 2; num3 <= num3Max; num3 += 2) {
                    console.log(`${num1} ${num2} ${num3}`);
                }
            }
        }
    }

}
uniquePINCodes(["3", "5", "5"]);
uniquePINCodes(["8", "2", "8"]);