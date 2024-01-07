function lettersCombinations(input) {

    let fromLetter = input[0];
    let toLetter = input[1];
    let ignoreLetter = input[2];


    let counter = 0;
    let result = "";

    for (let i = fromLetter.charCodeAt(0); i <= toLetter.charCodeAt(0); i++) {
        for (let j = fromLetter.charCodeAt(0); j <= toLetter.charCodeAt(0); j++) {
            for (let k = fromLetter.charCodeAt(0); k <= toLetter.charCodeAt(0); k++) {
                if (String.fromCharCode(i) !== ignoreLetter && String.fromCharCode(j) !== ignoreLetter && String.fromCharCode(k) !== ignoreLetter) {
                    result += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `;
                    counter++;
                }
            }
        }
    }

    console.log(result.trim(), counter);

}
lettersCombinations(["a", "c", "b"]);
// lettersCombinations(["f", "k", "h"]);
// lettersCombinations(["a", "c", "z"]);