function numberPyramid(input) {

    let n = Number(input[0]);

    let counter = 1;
    let isBigger = false;
    let printCurrLine = "";



    for (let row = 1; row <= n; row++) {
        for (let cols = 1; cols <= row; cols++) {

            if (counter > n) {
                isBigger = true;
                break;
            }
            printCurrLine += counter + " ";
            counter++;
        }
        console.log(printCurrLine);
        printCurrLine = "";
        if (isBigger) {
            break;
        }
    }

}
numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"]);