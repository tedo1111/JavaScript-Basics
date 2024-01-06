function equalSumsEvenOddPosition(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let printLine = " ";

    for (let i = num1; i <= num2; i++) {
        let currNum = "" + i;
        let sumEven = 0;
        let sumOdd = 0;


        for (let j = 0; j < currNum.length; j++) {

            let currDigit = Number(currNum.charAt(j));

            if (j % 2 === 0) {
                sumEven += currDigit;
            }
            else {
                sumOdd += currDigit;
            }
        }
        if (sumEven === sumOdd) {
            printLine += `${i} `;
        }
    }

    console.log(printLine);


}
equalSumsEvenOddPosition(["100000", "100050"]);
// equalSumsEvenOddPosition(["123456", "124000"]);
// equalSumsEvenOddPosition(["299900", "300000"]);
// equalSumsEvenOddPosition(["100115", "100120"]);
