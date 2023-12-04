function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let typeCar = "";
    let TypeClass = "";

    if (budget <= 100) {
        TypeClass = "Economy class";
        if (season === "Winter") {
            typeCar = "Jeep";
            budget *= 0.65;
        }
        else if (season === "Summer") {
            typeCar = "Cabrio";
            budget *= 0.35;
        }
    }
    else if (budget > 100 && budget <= 500) {
        TypeClass = "Compact class";
        if (season === "Winter") {
            typeCar = "Jeep";
            budget *= 0.8;
        }
        else if (season === "Summer") {
            typeCar = "Cabrio";
            budget *= 0.45;
        }
    }
    else if (budget > 500) {
        TypeClass = "Luxury class";
        if (season === "Winter" || season === "Summer") {
            typeCar = "Jeep";
            budget *= 0.9;
        }

    }


    console.log(TypeClass);
    console.log(`${typeCar} - ${budget.toFixed(2)}`);
}
carToGo(["450", "Summer"]);
carToGo(["450", "Winter"]);
carToGo(["99.99", "Summer"]);
carToGo(["1010", "Winter"]);
carToGo(["70.50", "Winter"]);