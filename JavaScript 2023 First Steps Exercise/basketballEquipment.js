function basketballEquipment(input) {

    let tax = Number(input);

    let sneakers = tax - (tax * 0.40);
    let equipment = sneakers - (sneakers * 0.2)
    let ball = equipment / 4;
    let accessories = ball / 5;

    let price = tax + sneakers + equipment + ball + accessories;

    console.log(price);

}
basketballEquipment(["365 "]);