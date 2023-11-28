function flowers(input) {

    let chrysanthemum = Number(input[0]);
    let rouses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let priceC = 0;
    let priceR = 0;
    let priceT = 0;

    let moreThen20 = 0;

    let midTotal = 0;

    switch (season) {
        case "Summer":
        case "Spring":
            if (chrysanthemum) {
                priceC = 2 * chrysanthemum;
            }
            if (rouses) {
                priceR = 4.1 * rouses;
            }
            if (tulips) {
                priceT = 2.5 * tulips;
            }

            if (isHoliday === "Y") {
                priceC *= 1.15;
                priceR *= 1.15;
                priceT *= 1.15;
            }

            midTotal = priceC + priceR + priceT;

            if (tulips > 7 && season === "Spring") {
                midTotal *= 0.95;
            }



            break;

        case "Autumn":
        case "Winter":
            if (chrysanthemum) {
                priceC = 3.75 * chrysanthemum;
            }
            if (rouses) {
                priceR = 4.50 * rouses;
            }
            if (tulips) {
                priceT = 4.15 * tulips;
            }
            if (isHoliday === "Y") {
                priceC *= 1.15;
                priceR *= 1.15;
                priceT *= 1.15;
            }
            midTotal = priceC + priceR + priceT;
            if (rouses >= 10 && season === "Winter") {
                midTotal *= 0.90;
            }


            break;

        default:
            break;
    }

    if ((chrysanthemum + tulips + rouses) > 20) {
        moreThen20 = midTotal * 0.20;
    }

    let total = 2 + midTotal - moreThen20;

    console.log(total.toFixed(2));
}
flowers(["2", "4", "8", "Spring", "Y"]);
flowers(["3", "10", "9", "Winter", "N"]);
flowers(["10", "10", "10", "Autumn", "N"]);
