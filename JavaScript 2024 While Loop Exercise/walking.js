function walking(input) {
    let index = 0;
    let currentElement = Number(input[index]);

    let stepsCounter = 0;

    while (index < input.length) {
        if (isNaN(currentElement)) {
            index++;
            currentElement = (input[index]);
            let stepsAfter = (stepsCounter + Number(currentElement));
            if (stepsAfter < 10000) {
                console.log(`${Math.abs(10000 - stepsAfter)} more steps to reach goal.`);
            }
            else {
                console.log(`Goal reached! Good job!\n${Math.abs(10000 - stepsAfter)} steps over the goal!`);
            }

            return;
        }

        if (input[index] === "Going home") {
            break;
        }

        stepsCounter += currentElement;

        if (stepsCounter >= 10000) {
            console.log(`Goal reached! Good job!\n${Math.abs(10000 - stepsCounter)} steps over the goal!`);
            return;
        }

        index++;
        currentElement = Number(input[index]);
    }

    let stepsAfter = stepsCounter + currentElement;

    if (stepsAfter < 10000) {
        console.log(`${Math.abs(10000 - stepsAfter)} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!\n${Math.abs(10000 - stepsAfter)} steps over the goal!`);
    }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);
