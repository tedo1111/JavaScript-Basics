function yardGreening(input) {

    let squareM = Number(input);

    let price = squareM * 7.61;

    let discount = price * 0.18;
    let totalprce = price - discount;

    console.log(`The final price is: ${totalprce} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening('150');