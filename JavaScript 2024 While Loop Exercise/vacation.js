function vacation(input) {
    let targetAmount = Number(input.shift());
    let availableMoney = Number(input.shift());

    let consecutiveDays = 0;
    let totalDays = 0;

    while (availableMoney < targetAmount && consecutiveDays < 5) {
        let action = input.shift();
        let amount = Number(input.shift());

        if (action === "save") {
            availableMoney += amount;
            consecutiveDays = 0;
        } else if (action === "spend") {
            availableMoney -= amount;
            consecutiveDays++;
        }

        if (availableMoney < 0) {
            availableMoney = 0;
        }

        totalDays++;
    }

    if (consecutiveDays === 5) {
        console.log("You can't save the money.");
        console.log(totalDays);
    } else {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacation([2000, 1000, "spend", 1200, "save", 2000]);
vacation([2000, 1000, "spend", 2000, "spend", 2000, "spend", 2000, "spend", 2000, "spend"]); 