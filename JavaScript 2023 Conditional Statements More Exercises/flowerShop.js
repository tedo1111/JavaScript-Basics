function flowerShop(input) {

    let magnolias = Number(input[0]);
    let hyacinths = Number(input[1]);
    let roses = Number(input[2]);
    let cacti = Number(input[3]);
    let priceOfGift = Number(input[4]);


    let price = magnolias * 3.25 + hyacinths * 4 + roses * 3.5 + cacti * 8;

    let taxes = price * 0.05;

    let totalPrice = price - taxes;

    if (totalPrice >= priceOfGift) {

        console.log(`She is left with ${Math.abs(Math.ceil(priceOfGift - totalPrice))} leva.`);
    }
    else {
        console.log(`She will have to borrow ${Math.abs(Math.floor(totalPrice - priceOfGift))} leva.`);
    }

}
flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);