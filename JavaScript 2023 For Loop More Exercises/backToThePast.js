function backToThePast(input) {

    let inheritedMoney = Number(input[0]);
    let year = Number(input[1]);

    let yearsNow = 17;

    for (let i = 1800; i <= year; i++) {

        if (i % 2 === 0) {
            yearsNow++;
            inheritedMoney -= 12000;
        }
        else {
            yearsNow++;
            inheritedMoney -= 12000 + yearsNow * 50;
        }

    }

    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`);
    }
    else {
        console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`);
    }

}
backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);