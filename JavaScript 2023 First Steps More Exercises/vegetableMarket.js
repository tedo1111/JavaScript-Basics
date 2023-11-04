function vegetableMarket(input) {

    let vegetables = Number(input[0]);
    let fruits = Number(input[1]);
    let totalVegetables = Number(input[2]);
    let totalFruits = Number(input[3]);


    let priceVegetables = vegetables * totalVegetables;
    let priceFruits = fruits * totalFruits;

    let total = (priceFruits + priceVegetables) / 1.94;

    console.log(total.toFixed(2));

}
vegetableMarket(["1.5",
    "2.5",
    "10",
    "10",
]);