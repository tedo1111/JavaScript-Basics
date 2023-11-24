function newHouse(input) {

    let flower = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;


    if (flower === `Roses`) {
        price = 5 * count;
        if (count > 80) {
            price *= 0.9;
        }
    }
    else if (flower === `Dahlias`) {
        price = 3.8 * count;
        if (count > 90) {
            price *= 0.85;
        }
    }
    else if (flower === `Tulips`) {
        price = 2.8 * count;
        if (count > 80) {
            price *= 0.85;
        }
    }
    else if (flower === `Narcissus`) {
        price = 3 * count;
        if (count < 120) {
            price *= 1.15;
        }
    }
    else if (flower === `Gladiolus`) {
        price = 2.5 * count;
        if (count < 80) {
            price *= 1.2;
        }
    }

    if (budget >= price) {

        console.log(`Hey, you have a great garden with ${count} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);


    }

}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);