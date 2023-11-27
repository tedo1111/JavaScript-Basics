function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);

    let price = 0;

    switch (season) {
        case "Spring":
            price = 3000;
            if (fishermans <= 6) {
                price *= 0.9;
            }
            else if (fishermans >= 7 && fishermans <= 11) {
                price *= 0.85;
            }
            else if (fishermans >= 12) {
                price *= 0.75;
            }

            if (fishermans % 2 === 0) {
                price *= 0.95;
            }
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            if (fishermans <= 6) {
                price *= 0.9;
            }
            else if (fishermans >= 7 && fishermans <= 11) {
                price *= 0.85;
            }
            else if (fishermans >= 12) {
                price *= 0.75;
            }
            if (fishermans % 2 === 0 && season !== "Autumn") {
                price *= 0.95;
            }

            break;
        case "Winter":
            price = 2600;
            if (fishermans <= 6) {
                price *= 0.9;
            }
            else if (fishermans >= 7 && fishermans <= 11) {
                price *= 0.85;
            }
            else if (fishermans >= 12) {
                price *= 0.75;
            }

            if (fishermans % 2 === 0) {
                price *= 0.95;
            }
            break;




        default:
            break;
    }

    if (price <= budget) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", "Summer", "11"])
fishingBoat(["3600", "Autumn", "6"])
fishingBoat(["2000", "Winter", "13"])
