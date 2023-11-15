function godzillavsKong(input) {

    let budget = Number(input[0]);
    let peopleForMovie = Number(input[1]);
    let costOfClothing = Number(input[2]);

    let decor = budget * 0.1;
    let priceClothing = costOfClothing * peopleForMovie;

    let discout = 0;
    if (peopleForMovie > 150) {
        discout = priceClothing * 0.1;
    }

    priceClothing = priceClothing - discout;

    if ((decor + priceClothing) > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${((decor + priceClothing) - budget).toFixed(2)} leva more.`);
    }
    else if ((decor + priceClothing) <= budget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - (decor + priceClothing)).toFixed(2)} leva left.`);
    }

}
godzillavsKong(["20000", "120", "55.5"]);
godzillavsKong(["15437.62", "186", "57.99"]);
godzillavsKong(["9587.88", "222", "55.68"]);

