function minNumber(input) {

    let index = 0;
    let currentElemet = input[index];

    let min = Number.MAX_SAFE_INTEGER;

    while (currentElemet !== `Stop`) {

        if (Number(currentElemet) < min) {
            min = currentElemet;
        }

        index++;
        currentElemet = input[index];
    }
    console.log(min);
}
minNumber(["100", "99", "80", "70", "Stop"]);
minNumber(["-10", "20", "-30", "Stop"]);
minNumber(["45", "-20", "7", "99", "Stop"]);
minNumber(["999", "Stop"]);
minNumber(["-1", "-2", "Stop"]);