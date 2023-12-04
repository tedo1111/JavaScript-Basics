function vacation(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let location = "";
    let place = "";

    if (budget <= 1000) {
        location = "Camp";
        if (season === `Summer`) {
            place = "Alaska";
            budget *= 0.65;
        }
        else if (season === `Winter`) {
            place = "Morocco";
            budget *= 0.45;
        }
    }
    else if (budget > 1000 && budget <= 3000) {
        location = "Hut";
        if (season === `Summer`) {
            place = "Alaska";
            budget *= 0.8;
        }
        else if (season === `Winter`) {
            place = "Morocco";
            budget *= 0.6;
        }
    } else if (budget > 3000) {
        location = "Hotel";
        if (season === `Summer`) {
            place = "Alaska";
            budget *= 0.9;
        }
        else if (season === `Winter`) {
            place = "Morocco";
            budget *= 0.9;
        }
    }

    console.log(`${place} - ${location} - ${budget.toFixed(2)}`);
}
vacation(["800", "Summer"]);
vacation(["799.5", "Winter"]);
vacation(["1100", "Summer"]);
vacation(["2543.99", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["5000", "Winter"]);