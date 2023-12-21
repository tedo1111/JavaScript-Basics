function bills(input) {

    let months = Number(input[0]);

    let water = 20;
    let wifi = 15;


    let ecelcticBill = 0;
    let more = 0;
    let total = 0;


    for (let i = 1; i <= months; i++) {
        let power = Number(input[i]);
        ecelcticBill += power;

        more = (((water + wifi + power) * 0.2) + (water + wifi + power));
        total += more;
    }

    let avg = (total + water * months + wifi * months + ecelcticBill) / months;
    let waterTotal = water * months;
    let wifiTotal = wifi * months;

    console.log(`Electricity: ${ecelcticBill.toFixed(2)} lv`);
    console.log(`Water: ${waterTotal.toFixed(2)} lv`);
    console.log(`Internet: ${wifiTotal.toFixed(2)} lv`);
    console.log(`Other: ${total.toFixed(2)} lv`);
    console.log(`Average: ${avg.toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);