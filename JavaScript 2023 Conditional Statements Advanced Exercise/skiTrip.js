function skiTrip(input) {

    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let review = input[2];

    let price = 0;
    let nights = days - 1;

    switch (typeOfRoom) {
        case "room for one person":
            price = 18 * nights;
            break;
        case "apartment":
            price = 25 * nights;
            if (nights <= 10) {
                price *= 0.7;
            }
            else if (nights >= 10 && nights <= 15) {
                price *= 0.65;
            }
            else if (nights > 15) {
                price *= 0.5;
            }
            break;
        case "president apartment":
            price = 35 * nights;
            if (nights <= 10) {
                price *= 0.9;
            }
            else if (nights >= 10 && nights <= 15) {
                price *= 0.85;
            }
            else if (nights > 15) {
                price *= 0.8;
            }
            break;

        default:
            break;
    }

    if (review === "positive") {
        price = price + (price * 0.25);
    }
    else {
        price *= 0.9;
    }

    console.log(price.toFixed(2));
}
skiTrip(["14", "apartment", "positive"])
skiTrip(["30", "president apartment", "negative"])
skiTrip(["12", "room for one person", "positive"])
skiTrip(["2", "apartment", "positive"])
