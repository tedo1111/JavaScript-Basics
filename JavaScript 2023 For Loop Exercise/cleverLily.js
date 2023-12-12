function cleverLily(input) {

    let age = Number(input[0]);
    let price = Number(input[1]);
    let toyPrice = Number(input[2]);

    let evenYear = 0;
    let oddYear = 0;
    let money = 0;
    let forBrother = 0;
    let counter = 0;

    for (let index = 1; index <= age; index++) {
        if (index % 2 === 0) {
            money += 10 * index / 2;
            oddYear++;
            counter++;
        }
        else {
            evenYear++;
        }
    }



    let moneyFromToys = evenYear * toyPrice;
    forBrother = counter * 1;

    let total = money + moneyFromToys - forBrother;

    if (total >= price) {
        console.log(`Yes! ${(total - price).toFixed(2)}`);
    }
    else {
        console.log(`No! ${(price - total).toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);
cleverLily(["21", "1570.98", "3"]);