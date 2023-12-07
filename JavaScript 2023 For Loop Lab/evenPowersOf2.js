function evenPowersOf2(input) {

    let num = Number(input[0]);

    for (let index = 0; index <= num; index += 2) {
        console.log(Math.pow(2, index));
    }

}
evenPowersOf2(["3"]);
evenPowersOf2(["4"]);
evenPowersOf2(["5"]);
evenPowersOf2(["6"]);
evenPowersOf2(["7"]);