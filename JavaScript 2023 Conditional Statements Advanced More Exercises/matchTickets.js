function matchTickets(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let price = 0;
    let normalPrice = 249.99;
    let vipPrice = 499.99;
    let totalPrice = 0;


    if (people >= 1 && people <= 4) {
        price = budget * 0.75;
    } else if (people >= 5 && people <= 9) {
        price = budget * 0.6;
    }
    else if (people >= 10 && people <= 24) {
        price = budget * 0.5;
    }
    else if (people >= 25 && people <= 49) {
        price = budget * 0.4;
    }
    else if (people >= 50) {
        price = budget * 0.25;
    }



    if (category === "Normal") {
        totalPrice = price + normalPrice * people;
    }
    else if (category === "VIP") {
        totalPrice = price + vipPrice * people;
    }


    if (totalPrice < budget) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);

    }
    else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);
    }


}
matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"])