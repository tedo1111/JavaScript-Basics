function pipesInPool(input) {

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let hoursMissing = Number(input[3]);


    let p1result = p1 * hoursMissing;
    let p2result = p2 * hoursMissing;

    let total = p1result + p2result;

    let p1Percentages = (p1result / total) * 100;
    let p2Percentages = (p2result / total) * 100;

    if (total <= v) {
        console.log(`The pool is ${(total / v * 100).toFixed(2)}% full. Pipe 1: ${p1Percentages.toFixed(2)}%. Pipe 2: ${p2Percentages.toFixed(2)}%.`);
    }

    else {
        console.log(`For ${hoursMissing.toFixed(2)} hours the pool overflows with ${(total - v).toFixed(2)} liters.`);
    }

}
pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);