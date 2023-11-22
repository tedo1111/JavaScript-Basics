function smallShop(input) {

    let product = input[0];
    let town = input[1];
    let amount = input[2];

    let price = 0;
    switch (town) {
        case "Sofia":
            if (product === `coffee`) {
                price = amount * 0.5;
            }
            else if (product === `water`) {
                price = amount * 0.8;
            }
            else if (product === `beer`) {
                price = amount * 1.2;
            }
            else if (product === `sweets`) {
                price = amount * 1.45;
            }
            else if (product === `peanuts`) {
                price = amount * 1.6;
            }
            break;
        case "Plovdiv":
            if (product === `coffee`) {
                price = amount * 0.4;
            }
            else if (product === `water`) {
                price = amount * 0.7;
            }
            else if (product === `beer`) {
                price = amount * 1.15;
            }
            else if (product === `sweets`) {
                price = amount * 1.3;
            }
            else if (product === `peanuts`) {
                price = amount * 1.5;
            }
            break;
        case "Varna":
            if (product === `coffee`) {
                price = amount * 0.45;
            }
            else if (product === `water`) {
                price = amount * 0.7;
            }
            else if (product === `beer`) {
                price = amount * 1.1;
            }
            else if (product === `sweets`) {
                price = amount * 1.35;
            }
            else if (product === `peanuts`) {
                price = amount * 1.55;
            }
            break;


        default:
            break;
    }

    console.log(price);
}
smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "6"]);
smallShop(["water", "Plovdiv", "3"]);
smallShop(["sweets", "Sofia", "2.23"]);