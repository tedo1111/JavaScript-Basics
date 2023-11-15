function shopping(input) {

    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ramMemori = Number(input[3]);

    let priceVideoCards = videoCard * 250;
    let processorPrice = processor * (priceVideoCards * 0.35);
    let ramMemoriPrice = ramMemori * (priceVideoCards * 0.1);

    let totalPrice = priceVideoCards + processorPrice + ramMemoriPrice;

    let discount = 0;
    if (videoCard > processor) {
        discount = totalPrice * 0.15;
    }

    let price = totalPrice - discount;


    if (budget >= price) {
        console.log(`You have ${(budget - price).toFixed(2)} leva left!`);
    }
    else if (budget < price) {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`);
    }
}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
