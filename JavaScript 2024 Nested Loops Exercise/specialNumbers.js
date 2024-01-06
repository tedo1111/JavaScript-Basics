function specialNumbers(input) {

    let n = Number(input[0]);

    let res = "";

    for (let currNum = 1111; currNum <= 9999; currNum++) {
        let currNumAsString = currNum.toString();

        let isSpacial = true;

        for (let i = 0; i < currNumAsString.length; i++) {
            let currDigit = Number(currNumAsString[i]);

            if (n % currDigit !== 0) {
                isSpacial = false;
                break;
            }
        }
        if (isSpacial) {
            res += `${currNumAsString} `;
        }
    }

    console.log(res);
}
specialNumbers(["3"]);
specialNumbers(["11"]);
specialNumbers(["16"]);