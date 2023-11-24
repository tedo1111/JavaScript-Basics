function summerOutfit(input) {

    let tempreture = Number(input[0]);
    let timeOfDay = input[1];

    let outfit;
    let shoes;
    switch (timeOfDay) {
        case "Morning":

            if (tempreture >= 10 && tempreture <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            }
            else if (tempreture > 18 && tempreture <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            else if (tempreture >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }

            break;
        case "Afternoon":
            if (tempreture >= 10 && tempreture <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            else if (tempreture <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            else if (tempreture >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case "Evening":
            if (tempreture >= 10 && tempreture <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            else if (tempreture <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            else if (tempreture >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            break;
        default:
            break;
    }
    console.log(`It's ${tempreture} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16", "Morning"])
summerOutfit(["22", "Afternoon"])
summerOutfit(["28", "Evening"])
