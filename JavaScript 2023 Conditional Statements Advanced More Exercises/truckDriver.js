function truckDriver(input) {

    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let money = 0;

    switch (season) {
        case "Spring":
        case "Autumn":
            if (kmPerMonth <= 5000) {
                money = kmPerMonth * 0.75;
            }
            else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                money = kmPerMonth * 0.95;
            }
            else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                money = kmPerMonth * 1.45;
            }
            break;
        case "Summer":
            if (kmPerMonth <= 5000) {
                money = kmPerMonth * 0.9;
            }
            else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                money = kmPerMonth * 1.1;
            }
            else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                money = kmPerMonth * 1.45;
            }
            break;
        case "Winter":
            if (kmPerMonth <= 5000) {
                money = kmPerMonth * 1.05;
            }
            else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
                money = kmPerMonth * 1.25;
            }
            else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
                money = kmPerMonth * 1.45;
            }
            break;
        default:
            break;
    }

    let totalMoney = money * 4;

    let taxes = totalMoney * 0.1;

    console.log((totalMoney - taxes).toFixed(2));
}
truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Spring", "16942"]);