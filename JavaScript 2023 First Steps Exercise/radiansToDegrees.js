function radiansToDegrees(input) {

    let angle = Number(input);

    let resut = (angle * 180) / Math.PI;

    console.log(resut);

}
radiansToDegrees(["3.1416"]);