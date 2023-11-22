function personalTitles(input) {

    let age = Number(input[0]);
    let sex = input[1];

    if (age >= 16 && sex === "m") {
        console.log(`Mr.`);
    }
    else if (age < 16 && sex === `m`) {
        console.log(`Master`);
    }

    if (age >= 16 && sex === "f") {
        console.log(`Ms.`);
    }
    else if (age < 16 && sex === `f`) {
        console.log(`Miss`);
    }

}
personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);
