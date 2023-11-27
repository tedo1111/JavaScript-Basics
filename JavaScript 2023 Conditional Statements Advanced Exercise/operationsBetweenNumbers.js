function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let evenOrOdd = "";


    switch (operator) {
        case "+":
            if ((n1 + n2) % 2 === 0) {
                evenOrOdd = "even";
            }
            else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${(n1 + n2)} - ${evenOrOdd}`);
            break;
        case "-":
            if ((n1 - n2) % 2 === 0) {
                evenOrOdd = "even";
            }
            else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${(n1 - n2)} - ${evenOrOdd}`);
            break;
        case "*":
            if ((n1 * n2) % 2 === 0) {
                evenOrOdd = "even";
            }
            else {
                evenOrOdd = "odd";
            }
            console.log(`${n1} ${operator} ${n2} = ${(n1 * n2)} - ${evenOrOdd}`);
            break;
        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            }
            else {
                console.log(`${n1} / ${n2} = ${((n1 / n2).toFixed(2))}`);
            }
            break;
        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            }
            else {
                console.log(`${n1} % ${n2} = ${((n1 % n2))}`);
            }
            break;

        default:
            break;
    }

}
operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);