function dishwasher(input) {

    let detergent = Number(input[0]);

    let counter = 0;
    let usedDetergent = 0;
    let plates = 0;
    let pots = 0;


    let index = 1;
    let currentElement = input[index];

    let quantityDetergent = detergent * 750;

    while (currentElement !== `End`) {

        counter++;

        if (counter % 3 === 0) {
            usedDetergent = currentElement * 15;
            pots += Number(currentElement);
        }
        else {
            usedDetergent = currentElement * 5;
            plates += Number(currentElement);
        }
        quantityDetergent -= usedDetergent;

        if (quantityDetergent < 0) {
            console.log(`Not enough detergent, ${Math.abs(quantityDetergent)} ml. more necessary!`);
            break;
        }

        index++;
        currentElement = input[index];

    }

    if (quantityDetergent >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${quantityDetergent} ml.`);
    }

}
dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);