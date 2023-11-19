function transportPrice(input) {

    let km = Number(input[0]);
    let dayNight = input[1];

    let price = 0;

    if (km < 20) {
        if (dayNight === `day`) {
            price = km * 0.79 + 0.7;
        }
        else {
            price = km * 0.9 + 0.7;
        }
    }
    else if (km >= 20 && km < 100) {
        if (dayNight === `day` || dayNight === `night`) {
            price = km * 0.09;
        }
    }

    else if (km >= 100) {
        if (dayNight === `day` || dayNight === `night`) {
            price = km * 0.06;
        }
    }

    console.log(price.toFixed(2));

}
transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["25", "day"]);
transportPrice(["180", "night"]);