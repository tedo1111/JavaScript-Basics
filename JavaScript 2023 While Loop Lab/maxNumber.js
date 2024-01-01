function maxNumber(input) {

    let index = 0;
    let currentElemet = (input[index]);

    let max = Number.MIN_SAFE_INTEGER;

    while (currentElemet !== `Stop`) {

        if (Number(currentElemet) > max) {
            max = currentElemet;
        }

        index++;
        currentElemet = (input[index]);
    }

    console.log(max);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber(["-1", "-2", "Stop"]);