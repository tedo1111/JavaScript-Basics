function foodDelivery(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let price = (chickenMenu * 10.35) + (fishMenu * 12.4) + (veganMenu * 8.15);

    let dessert = price * 0.2;

    let delivery = 2.5;

    let total = price + dessert + delivery;

    console.log(total);

}
foodDelivery(["2 ", "4 ", "3 "]);