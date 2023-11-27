function hotelRoom(input) {

    let months = input[0];
    let nights = Number(input[1]);

    let apartament = 0;
    let studio = 0;
    let price = 0;
    let room = "";

    switch (months) {
        case "October":
        case "May":
            apartament = 65 * nights;
            studio = 50 * nights;

            if (nights > 14 && studio) {
                studio *= 0.7;
            }
            else if (nights > 7 && studio) {
                studio *= 0.95;
            }
            if (apartament && nights > 14) {
                apartament *= 0.9;
            }
            break;
        case "June":
        case "September":
            apartament = 68.7 * nights;
            studio = 75.2 * nights;
            if (nights > 14 && studio) {
                studio *= 0.8;
            }
            if (apartament && nights > 14) {
                apartament *= 0.9;
            }
            break;
        case "August":
        case "July":
            apartament = 77 * nights;
            studio = 76 * nights;
            if (apartament && nights > 14) {
                apartament *= 0.9;
            }
            break;
        default:
            break;
    }



    console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"])
hotelRoom(["June", "14"])
hotelRoom(["August", "20"])
