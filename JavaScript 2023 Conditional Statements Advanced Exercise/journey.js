function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let place = "";

    if (season === `summer`) {
        destination = "Camp";
    }
    else if (season === `winter`) {
        destination = "Hotel";
    }

    if (budget <= 100) {
        place = "Bulgaria";
        if (season === `winter`) {
            budget *= 0.70;
        }

        else {
            budget *= 0.30;
        }
    }

    else if (budget > 100 && budget <= 1000) {
        place = "Balkans";
        if (season === `winter`) {
            budget *= 0.80;
        }

        else {
            budget *= 0.40;
        }
    }

    else if (budget > 1000) {
        place = "Europe";
        budget *= 0.9;
    }

    if (place === `Europe`) {
        destination = "Hotel";
    }


    console.log(`Somewhere in ${place}`);
    console.log(`${destination} - ${(budget.toFixed(2))}`);

}
journey(["50", "summer"]);
journey(["75", "winter"]);
journey(["312", "summer"]);
journey(["678.53", "winter"]);
journey(["1500", "summer"]);