function bikeRace(input) {

    let youngBikers = Number(input[0]);
    let oldBikers = Number(input[1]);
    let roadType = input[2];

    let priceY = 0;
    let priceO = 0;

    let expenses = 0;

    switch (roadType) {
        case "trail":
            if (youngBikers) {
                priceY = 5.50 * youngBikers;
            }
            if (oldBikers) {
                priceO = 7 * oldBikers;
            }
            break;
        case "cross-country":
            if (youngBikers) {
                priceY = 8 * youngBikers;
            }
            if (oldBikers) {
                priceO = 9.5 * oldBikers;
            }

            if (youngBikers + oldBikers >= 50) {
                priceY *= 0.75;
                priceO *= 0.75;
            }
            break;
        case "downhill":
            if (youngBikers) {
                priceY = 12.25 * youngBikers;
            }
            if (oldBikers) {
                priceO = 13.75 * oldBikers;
            }
            break;
        case "road":
            if (youngBikers) {
                priceY = 20 * youngBikers;
            }
            if (oldBikers) {
                priceO = 21.5 * oldBikers;
            }
            break;

        default:
            break;
    }

    expenses = (priceY + priceO) * 0.05;
    console.log(((priceY + priceO) - expenses).toFixed(2));
}
bikeRace(["10", "20", "trail"])
bikeRace(["21", "26", "cross-country"])
bikeRace(["30", "25", "cross-country"])
bikeRace(["10", "10", "downhill"])
bikeRace(["3", "40", "road"])
bikeRace(["21", "26", "cross-country"]);