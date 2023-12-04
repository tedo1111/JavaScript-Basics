function schoolCamp(input) {

    let season = input[0];
    let group = input[1];
    let students = Number(input[2]);
    let nights = Number(input[3]);

    let price = 0;
    let sport = "";

    switch (season) {
        case "Winter":
            if (group === "boys" || group === "girls") {
                price = students * nights * 9.6;
            }
            else if (group === "mixed") {

                price = students * nights * 10;
            }

            if (group === "boys") {
                sport = "Judo";
            }
            else if (group === "girls") {
                sport = "Gymnastics";
            }
            else if (group === "mixed") {
                sport = "Ski";
            }
            break;
        case "Spring":
            if (group === "boys" || group === "girls") {
                price = students * nights * 7.2;
            }
            else if (group === "mixed") {

                price = students * nights * 9.5;
            }
            if (group === "boys") {
                sport = "Tennis";
            }
            else if (group === "girls") {
                sport = "Athletics";
            }
            else if (group === "mixed") {
                sport = "Cycling";
            }
            break;
        case "Summer":
            if (group === "boys" || group === "girls") {
                price = students * nights * 15;
            }
            else if (group === "mixed") {

                price = students * nights * 20;
            }

            if (group === "boys") {
                sport = "Football";
            }
            else if (group === "girls") {
                sport = "Volleyball";
            }
            else if (group === "mixed") {
                sport = "Swimming";
            }
            break;

        default:
            break;
    }

    if (students >= 50) {
        price *= 0.5;
    } else if (students >= 20 && students < 50) {
        price *= 0.85;
    } else if (students >= 10 && students < 20) {
        price *= 0.95;
    }



    console.log((`${sport} ${price.toFixed(2)} lv.`));

}
schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);
