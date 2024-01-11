function safePasswordsGenerator(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);
    let max = Number(input[2]);

    let count = 0;
    let firstSymbol = 35;
    let secondSymbol = 64;
    let isEnough = false;
    let res = "";

    for (let thirdSymbol = 1; thirdSymbol <= a; thirdSymbol++) {
        for (let forthSymbol = 1; forthSymbol <= b; forthSymbol++) {
            if (firstSymbol > 55) {
                firstSymbol = 35;
            }
            if (secondSymbol > 96) {
                secondSymbol = 64;
            }
            if (count >= max) {
                isEnough = true;
                break;
            }
            count++;

            res += `${String.fromCharCode(firstSymbol)}${String.fromCharCode(secondSymbol)}${thirdSymbol}${forthSymbol}${String.fromCharCode(secondSymbol)}${String.fromCharCode(firstSymbol)}|`;


            firstSymbol++;
            secondSymbol++;
        }
        if (isEnough) {
            break;
        }
    }

    console.log(res);
}
safePasswordsGenerator(["2", "3", "10"]);
// safePasswordsGenerator(["20", "50", "100"]);