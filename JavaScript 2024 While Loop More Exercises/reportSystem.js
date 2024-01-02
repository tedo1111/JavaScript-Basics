function reportSystem(input) {

    let neededMoney = Number(input[0]);


    let cash = 0;
    let cashCounter = 0;
    let sumCash = 0;
    let card = 0;
    let cardCouter = 0;
    let sumCard = 0;

    let index = 1;
    let currentElement = input[index];

    let sum = 0;

    while (currentElement !== 'End') {

        cash = Number(currentElement);
        index++;
        currentElement = input[index];
        card = Number(currentElement);


        if ((cash > 100)) {
            console.log(`Error in transaction!`);
        }
        else {
            console.log(`Product sold!`);
            sum += cash;
            cashCounter++;
            sumCash += cash;
        }
        if ((card < 10)) {
            console.log(`Error in transaction!`);
        }
        else {
            console.log(`Product sold!`);
            sum += card;
            cardCouter++;
            sumCard += card;
        }

        if (sum >= neededMoney) {
            console.log(`Average CS: ${((sumCash / cashCounter).toFixed(2))}`);
            console.log(`Average CC: ${((sumCard / cardCouter).toFixed(2))}`);
            break;
        }

        index++;
        currentElement = input[index];

    }

    if (sum < neededMoney) {
        console.log(`Failed to collect required money for charity.`);
    }
}
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);