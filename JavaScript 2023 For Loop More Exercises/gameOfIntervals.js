function gameOfIntervals(input) {

    let totalMoves = Number(input[0]);

    let from0to9 = 0;
    let from10to19 = 0;
    let from20to29 = 0;
    let from30to39 = 0;
    let from40to50 = 0;
    let invalid = 0;

    let points = 0;

    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;
    let counter5 = 0;
    let counter6 = 0;

    for (let i = 1; i <= totalMoves; i++) {
        let num = Number(input[i]);

        if (num >= 0 && num <= 9) {
            points += num * 0.2;
            from0to9 += num;
            counter1++;
        }
        else if (num >= 10 && num <= 19) {
            points += num * 0.3;
            from10to19 += num;
            counter2++;
        }
        else if (num >= 20 && num <= 29) {
            points += num * 0.4;
            from20to29 += num;
            counter3++;
        }
        else if (num >= 30 && num <= 39) {
            points += 50;
            from30to39 += num;
            counter4++;
        } else if (num >= 40 && num <= 50) {
            points += 100;
            from40to50 += num;
            counter5++;
        }
        else if (num < 0 || num > 50) {
            points /= 2;
            invalid += num;
            counter6++;
        }
    }


    let res1 = (((counter1 / totalMoves) * 100).toFixed(2));
    let res2 = (((counter2 / totalMoves) * 100).toFixed(2));
    let res3 = (((counter3 / totalMoves) * 100).toFixed(2));
    let res4 = (((counter4 / totalMoves) * 100).toFixed(2));
    let res5 = (((counter5 / totalMoves) * 100).toFixed(2));
    let res6 = (((counter6 / totalMoves) * 100).toFixed(2));


    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${res1}%`);
    console.log(`From 10 to 19: ${res2}%`);
    console.log(`From 20 to 29: ${res3}%`);
    console.log(`From 30 to 39: ${res4}%`);
    console.log(`From 40 to 50: ${res5}%`);
    console.log(`Invalid numbers: ${res6}%`);

}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);