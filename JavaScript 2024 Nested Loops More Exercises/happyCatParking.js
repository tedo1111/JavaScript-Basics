function happyCatParking(input) {

    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);

    let price = 0;
    let pricePerDay = 0;

    for (let day = 1; day <= days; day++) {
        if (day > 1) {
            console.log(`Day: ${day - 1} - ${pricePerDay.toFixed(2)} leva`);
        }

        price += pricePerDay;
        pricePerDay = 0;

        for (let hour = 1; hour <= hoursPerDay; hour++) {
            if (day % 2 === 0 && hour % 2 !== 0) {
                pricePerDay += 2.50;
            }
            else if (day % 2 !== 0 && hour % 2 === 0) {
                pricePerDay += 1.25;
            }
            else {
                pricePerDay += 1;
            }

        }
    }
    price += pricePerDay;
    console.log(`Day: ${days} - ${pricePerDay.toFixed(2)} leva`);
    console.log(`Total: ${price.toFixed(2)} leva`);

}
happyCatParking(["2", "5"]);
happyCatParking(["5", "2"]);