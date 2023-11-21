function pets(input) {

    let days = Number(input[0]);
    let foodInKg = Number(input[1]);
    let dogFoodKg = Number(input[2]);
    let catFoodKg = Number(input[3]);
    let turtleFoodGr = Number(input[4]);

    let totalFoodDog = dogFoodKg * days;
    let totalFoodCat = catFoodKg * days;
    let totalFoodTurtle = turtleFoodGr * days / 1000;

    let totalFood = totalFoodCat + totalFoodDog + totalFoodTurtle;

    let result = foodInKg - totalFood;

    if (totalFood <= foodInKg) {
        console.log(`${Math.floor(result)} kilos of food left.`);
    }
    else {
        console.log(`${Math.ceil(totalFood - foodInKg)} more kilos of food are needed.`);
    }
}
pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);