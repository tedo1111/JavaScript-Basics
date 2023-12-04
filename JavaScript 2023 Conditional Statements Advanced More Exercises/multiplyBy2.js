function multiplyBy2(input) {

    let i = 0;

    while (i < input.length) {
        let num = input[i];

        if (num < 0) {
            console.log(`Negative number!`);
            break;
        }

        let result = num * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        i++;
    }


}
multiplyBy2(["12", "43.2144", "12.3", "543.23", "-20"]);
multiplyBy2(["23.43", "12.345", "0", "65.23432", "23", "65", "-12"]);
multiplyBy2(["-123"]);