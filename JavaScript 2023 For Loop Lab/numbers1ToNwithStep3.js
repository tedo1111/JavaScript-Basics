function numbers1ToNwithStep3(input) {

    let n = Number(input[0]);

    for (let index = 1; index <= n; index += 3) {
        console.log(index);
    }
}
numbers1ToNwithStep3(["10"]);
numbers1ToNwithStep3(["7"]);
numbers1ToNwithStep3(["15"]);