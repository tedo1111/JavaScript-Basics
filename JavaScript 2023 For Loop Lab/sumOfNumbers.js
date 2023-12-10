function sumOfNumbers(input) {

    let n = input[0];
    let sum = 0;

    for (let index = 0; index < n.length; index++) {

        let digit = Number(n[index]);

        sum += digit;

    }

    console.log(`The sum of the digits is:${sum}`);

}
sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);