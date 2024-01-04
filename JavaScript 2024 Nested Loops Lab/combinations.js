function combinations(input) {

    let n = Number(input[0]);
    let counter = 0;

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {

                if ((i + j + k) === n) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);

}
combinations(["25"]);
combinations(["20"]);
combinations(["5"]);
