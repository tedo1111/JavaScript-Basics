function vacation(input) {

    let needMoney = Number(input[0]);
    let moneyInBank = Number(input[1]);


    let move = "";
    let money = 0;
    dayCounter = 0;
    let currentSpendStreak = 0;


    let index = 2;
    let currentElement = input[index];

    while (currentSpendStreak !== 5) {

        move = currentElement;
        index++;
        currentElement = input[index];
        money = Number(currentElement);
        dayCounter++;

        if (move === `spend`) {
            moneyInBank -= money;



        }
        if (move === "spend") {
            currentSpendStreak++;
        } else {
            currentSpendStreak = 1;
        }

        if (moneyInBank < 0) {
            moneyInBank = 0;
        }

        if (move === `save`) {
            moneyInBank += money;
        }

        if (needMoney <= moneyInBank) {
            console.log(`You saved the money for ${dayCounter} days.`);
            break;
        }

        index++;
        currentElement = input[index];
    }
    if (currentSpendStreak === 5) {
        console.log(`You can't save the money.\n${dayCounter}`);

    }

}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
