function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let term = Number(input[1]);
    let procent = Number(input[2]);

    let total = depositSum + (term / 100) * ((depositSum * procent) / 12);

    console.log(total);

}
depositCalculator(["200 ", "3 ", "5.7 "]);