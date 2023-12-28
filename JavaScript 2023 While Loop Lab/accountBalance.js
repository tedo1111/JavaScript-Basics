function accountBalance(input) {



    let index = 0;
    let currentElemet = input[index];


    let total = 0;


    while (currentElemet !== "NoMoreMoney") {
        let currentElemetAsNumber = Number(currentElemet);

        if (currentElemetAsNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }

        console.log(`Increase: ${currentElemetAsNumber.toFixed(2)}`);
        total += currentElemetAsNumber;

        index++;
        currentElemet = input[index];

    }

    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);