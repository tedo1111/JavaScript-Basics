function bonusScore(input) {

    let num = Number(input[0]);
    let bonusPonts = 0;


    if (num <= 100) {
        bonusPonts = 5;
    }
    else if (num > 100 && num < 1000) {
        bonusPonts = num * 0.2;
    }
    else if (num > 1000) {
        bonusPonts = num * 0.1;
    }

    if (num % 2 === 0) {
        bonusPonts += 1;
    }
    else if (num % 5 === 0) {
        bonusPonts += 2;
    }

    console.log(bonusPonts);
    console.log(bonusPonts + num);

}
bonusScore(["20"])
bonusScore(["175"])
bonusScore(["2703"])
bonusScore(["15875"])