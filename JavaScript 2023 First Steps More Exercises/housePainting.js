function housePainting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let backWall = x * x;
    let frontWall = x * x - (1.2 * 2);

    let leftWall = x * y - (1.5 * 1.5);
    let rightWall = x * y - (1.5 * 1.5);

    let roofLeft = x * y;
    let roofRight = x * y;

    let roofFront = x * h / 2;
    let roofBack = x * h / 2;

    let green = backWall + frontWall + leftWall + rightWall;

    let red = roofBack + roofFront + roofLeft + roofRight;

    let greenPrice = green / 3.4;
    let redPrice = red / 4.3;


    console.log(greenPrice.toFixed(2));
    console.log(redPrice.toFixed(2));
}
housePainting(["6", "10", "5.2"]);