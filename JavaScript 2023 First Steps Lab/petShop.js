function petShop(input) {

    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);


    let price = dogFood * 2.5 + catFood * 4;

    console.log(price + ' lv.');

}
petShop(["5 ", "4 "]);