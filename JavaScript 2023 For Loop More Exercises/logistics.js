function logistics(input) {

    let loads = Number(input[0]);


    let bus = 0;
    let truck = 0;
    let train = 0;
    let total = 0;
    let busCounter = 0;
    let truckCounter = 0;
    let trainCounter = 0;

    for (let i = 1; i <= loads; i++) {
        let tons = Number(input[i]);
        total += tons;


        if (tons <= 3) {
            bus += tons * 200;
            busCounter += tons;
        }
        else if (tons >= 4 && tons <= 11) {
            truck += tons * 175;
            truckCounter += tons;
        }
        else if (tons >= 12) {
            train += tons * 120;
            trainCounter += tons;
        }
    }

    let avg = ((bus + truck + train) / total);


    console.log(avg.toFixed(2));
    console.log(((busCounter / total) * 100).toFixed(2) + "%");
    console.log(((truckCounter / total) * 100).toFixed(2) + "%");
    console.log(((trainCounter / total) * 100).toFixed(2) + "%");


}
logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);