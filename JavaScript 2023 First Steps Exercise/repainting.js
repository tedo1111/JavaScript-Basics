function repainting(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let time = Number(input[3]);

    let nylonPice = nylon * 1.5;
    let paintPrice = paint * 14.5;
    let thinnerPrice = thinner * 5;

    let extraPaint = paint * 0.1;
    let extraPaintPrice = extraPaint * 14.5;

    let extraNylon = 3;
    let bags = 0.4;

    let price = nylonPice + paintPrice + thinnerPrice + extraPaintPrice + extraNylon + bags;

    let forWorkers = price * 0.30 * time;

    let totalPrice = price + forWorkers;

    console.log(totalPrice);

}
repainting(["10 ", "11 ", "4 ", "8 "]);