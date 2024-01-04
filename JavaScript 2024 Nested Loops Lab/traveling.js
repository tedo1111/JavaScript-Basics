function traveling(input) {
    let index = 0;

    while (index < input.length) {
        let destination = input[index++];
        if (destination === "End") {
            break;
        }

        let minBudget = Number(input[index++]);

        let sum = 0;
        let currentElement = input[index++];

        while (currentElement !== "End") {
            sum += Number(currentElement);

            if (sum >= minBudget) {
                console.log(`Going to ${destination}!`);
                break;
            }

            currentElement = input[index++];
        }
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"]);
traveling(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);
