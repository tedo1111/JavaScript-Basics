function toyShop(input) {

    let excursion = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let totalPrice = puzzle * 2.6 + doll * 3 + bear * 4.1 + minion * 8.2 + truck * 2;
    let quantity = puzzle + doll + bear + minion + truck;


    if (quantity >= 50) {
        totalPrice = totalPrice - totalPrice * 0.25;

    }

    let rent = totalPrice * 0.1;

    let money = totalPrice - rent;

    let notEnough = money - excursion;
    let enough = excursion - money;
    if (money >= excursion) {
        console.log(`Yes! ${notEnough.toFixed(2)} lv left.`);
    }
    else {
        console.log(`Not enough money! ${enough.toFixed(2)} lv needed.`);
    }


}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);