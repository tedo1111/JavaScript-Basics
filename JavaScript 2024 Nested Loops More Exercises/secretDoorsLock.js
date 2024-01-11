function secretDoorsLock(input) {

    let ones = Number(input[0]);
    let tens = Number(input[1]);
    let hundreds = Number(input[2]);

    for (let a = 1; a <= ones; a++) {
        for (let b = 1; b <= tens; b++) {
            for (let c = 1; c <= hundreds; c++) {

                if (a % 2 === 0 && c % 2 === 0) {
                    if (b === 2 || b === 3 || b === 5 || b === 7) {
                        console.log(`${a} ${b} ${c}`);

                    }
                }
            }
        }
    }

}
secretDoorsLock(["3", "5", "5"]);
secretDoorsLock(["8", "2", "8"]);
