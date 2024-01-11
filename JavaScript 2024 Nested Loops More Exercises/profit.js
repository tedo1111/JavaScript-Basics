function profit(input) {

    let coins1Lev = Number(input[0]);
    let coins2Leva = Number(input[1]);
    let cash5leva = Number(input[2]);
    let sum = Number(input[3]);

    for (let one = 0; one <= coins1Lev; one++) {
        for (let two = 0; two <= coins2Leva; two++) {
            for (let five = 0; five <= cash5leva; five++) {
                if (one * 1 + two * 2 + five * 5 === sum) {
                    console.log((`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${sum} lv.`));
                }
            }
        }
    }

}
profit(["3", "2", "3", "10"]);
profit(["5", "3", "1", "7"]);