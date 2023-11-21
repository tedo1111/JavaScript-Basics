function fuelTank2(input) {

    let typeFuel = input[0];
    let amount = Number(input[1]);
    let clubCard = input[2];


    let gas = 0.93;
    let gasoline = 2.22;
    let diesel = 2.33;

    let price = 0;

    let discount1 = 0;
    let discount2 = 0;


    if (typeFuel === `Gas`) {
        if (clubCard === `Yes`) {
            price = (gas - 0.08) * amount;
        }
        else {
            price = gas * amount;
        }
    }

    else if (typeFuel === `Gasoline`) {
        if (clubCard === `Yes`) {
            price = (gasoline - 0.18) * amount;
        }
        else {
            price = gasoline * amount;
        }
    }

    else if (typeFuel === `Diesel`) {
        if (clubCard === `Yes`) {
            price = (diesel - 0.12) * amount;
        }
        else {
            price = diesel * amount;
        }
    }

    if (amount >= 20 && amount <= 25) {
        discount1 = price * 0.08;
        price -= discount1;
    }


    if (amount > 25) {
        discount2 = price * 0.10;
        price -= discount2;
    }



    console.log(`${price.toFixed(2)} lv.`);
}
fuelTank2(["Gas", "30", "Yes"]);
fuelTank2(["Gasoline", "25", "No"]);
fuelTank2(["Diesel", "19", "No"]);
