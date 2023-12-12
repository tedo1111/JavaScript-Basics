function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let points = Number(input[1]);
    let etap = input[2];
    let avgPoints = 0;
    let win = 0;

    for (let i = 2; i <= tournaments + 1; i++) {
        let result = input[i];

        if (result === "W") {
            points += 2000;
            avgPoints += 2000;
            win++;
        }
        else if (result === "F") {
            points += 1200;
            avgPoints += 1200;
        }
        else if (result === "SF") {
            points += 720;
            avgPoints += 720;
        }

    }

    let avg = Math.floor(avgPoints / tournaments);
    let wins = (win / (tournaments)) * 100;

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${avg}`);
    console.log(`${wins.toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
