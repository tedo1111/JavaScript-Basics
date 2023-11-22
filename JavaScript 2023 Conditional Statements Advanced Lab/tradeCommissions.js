function tradeCommissions(input) {

    let town = input[0];
    let amount = Number(input[1]);
    let commission = 0;

    if (amount < 0) {
        console.log(`error`);
        return;
    }

    switch (town) {
        case "Sofia":
            if (amount >= 0 && amount <= 500) {
                commission = amount * 0.05;
            }
            else if (amount >= 500 && amount <= 1000) {
                commission = amount * 0.07;
            }
            else if (amount >= 1000 && amount <= 10000) {
                commission = amount * 0.08;
            }
            else if (amount >= 10000) {
                commission = amount * 0.12;
            }

            console.log(commission.toFixed(2));
            break;
        case "Varna":
            if (amount >= 0 && amount <= 500) {
                commission = amount * 0.045;
            }
            else if (amount >= 500 && amount <= 1000) {
                commission = amount * 0.075;
            }
            else if (amount >= 1000 && amount <= 10000) {
                commission = amount * 0.1;
            }
            else if (amount >= 10000) {
                commission = amount * 0.13;
            }

            console.log(commission.toFixed(2));
            break;
        case "Plovdiv":

            if (amount >= 0 && amount <= 500) {
                commission = amount * 0.055;
            }
            else if (amount >= 500 && amount <= 1000) {
                commission = amount * 0.08;
            }
            else if (amount >= 1000 && amount <= 10000) {
                commission = amount * 0.12;
            }
            else if (amount >= 10000) {
                commission = amount * 0.145;
            }

            console.log(commission.toFixed(2));

            break;

        default:
            console.log(`error`);

            break;
    }

}
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);
tradeCommissions(["Plovdiv", "-20"])
