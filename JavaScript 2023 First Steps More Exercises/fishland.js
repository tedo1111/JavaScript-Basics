function Fishland(input) {

    let mackerel = Number(input[0]);
    let sprat = Number(input[1]);
    let bonito = Number(input[2]);
    let safrid = Number(input[3]);
    let mussels = Number(input[4]);

    let bonitoPrice = bonito * (mackerel + (mackerel * 0.6));
    let safridPrice = safrid * (sprat + (sprat * 0.8));
    let musselsPrice = mussels * 7.5;

    let total = bonitoPrice + safridPrice + musselsPrice;


    console.log(total.toFixed(2));

}
Fishland(["6.90", "4.20", "1.5", "2.5", "1"]);