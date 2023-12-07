function numbersNTo1(input) {

    let num = Number(input[0]);

    for (let index = num; index > 0; index--) {
        console.log(index);
    }
}
numbersNTo1(["2"]);
numbersNTo1(["3"]);
numbersNTo1(["5"]);