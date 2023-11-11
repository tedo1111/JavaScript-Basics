function areaOfFigures(input) {

    let fiquere = input[0];
    let side1 = Number(input[1]);
    let side2 = Number(input[2]);
    let area = 0;

    if (fiquere === `square`) {
        area = side1 * side1;
    }
    else if (fiquere === `rectangle`) {
        area = side1 * side2;
    }
    else if (fiquere === `circle`) {
        area = Math.PI * side1 * side1;
    }
    else if (fiquere === `triangle`) {
        area = 0.5 * side1 * side2;
    }

    console.log(area.toFixed(3));
}
areaOfFigures(["square", "5"])
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"])
areaOfFigures(["triangle", "4.5", "20"])

