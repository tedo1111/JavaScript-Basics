function fuelTank(input) {

    let typeOfFule = input[0];
    let amount = Number(input[1]);


    if (typeOfFule === `diesel` || typeOfFule === `gasoline` || typeOfFule === `gas`) {
        if (amount >= 25) {
            console.log(`You have enough ${typeOfFule}.`);
        }
        else {
            console.log(`Fill your tank with ${typeOfFule}!`);
        }
    }
    else {
        console.log(`Invalid fuel!`);
    }


}
fuelTank(["diesel", "10"]);
fuelTank(["gasoline", "40"]);
fuelTank(["gas", "25"]);
fuelTank(["kerosene", "200"]);