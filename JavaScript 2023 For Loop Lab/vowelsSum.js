function vowelsSum(input) {

    let text = input[0];

    let sum = 0;

    for (let index = 0; index < text.length; index++) {
        let result = text[index];
        if (result === "a") {
            sum += 1;
        }
        else if (result === "e") {
            sum += 2;
        }
        else if (result === "i") {
            sum += 3;
        }
        else if (result === "o") {
            sum += 4;
        }
        else if (result === "u") {
            sum += 5;
        }
    }
    console.log(sum);
}
vowelsSum(["hello"]);
vowelsSum(["hi"]);
vowelsSum(["bamboo"]);
vowelsSum(["beer"]);
