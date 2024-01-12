function primePairs(input) {

    let start1 = Number(input[0]);
    let start2 = Number(input[1]);
    let diff1 = Number(input[2]);
    let diff2 = Number(input[3]);


    let maxFirst = start1 + diff1;
    let maxSec = start2 + diff2;

    for (let i = start1; i <= maxFirst; i++) {
        for (let j = start2; j <= maxSec; j++) {
            let isFirstNumPrime = true;
            let isSecNumPrime = true;

            for (let k = 2; k <= Math.sqrt(i); k++) {
                if (i % k === 0) {
                    isFirstNumPrime = false;
                    break;
                }
            }
            for (let k = 2; k <= Math.sqrt(j); k++) {
                if (j % k === 0) {
                    isSecNumPrime = false;
                    break;
                }
            }

            if (isFirstNumPrime && isSecNumPrime) {
                console.log(`${i}${j}`);
            }
        }
    }

}
primePairs(["10", "20", "5", "5"]);
primePairs(["10", "30", "9", "6"]);