function carNumber(input) {

    let start = Number(input[0]);
    let finish = Number(input[1]);

    let res = "";

    for (let a = start; a <= finish; a++) {
        for (let b = start; b <= finish; b++) {
            for (let c = start; c <= finish; c++) {
                for (let d = start; d <= finish; d++) {

                    if (((a % 2 === 0 && d % 2 !== 0) || (a % 2 !== 0 && d % 2 === 0))) {
                        if (a > d) {
                            if ((b + c) % 2 === 0) {
                                res += (`${a}${b}${c}${d}` + " ");
                            }
                        }
                    }

                }
            }
        }
    }
    console.log(res);
}
carNumber(["2", "3"]);
carNumber(["3", "5"]);
carNumber(["5", "8"]);