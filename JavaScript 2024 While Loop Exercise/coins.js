function coins(input) {

    let coin = Number(input[0]);


    let coins = Math.round(coin * 100);

    let coinsCounter = 0;

    while (coins > 0) {

        if (coins >= 200) {
            coins -= 200;
        } else if (coins >= 100) {
            coins -= 100;
        }
        else if (coins >= 50) {
            coins -= 50;
        }
        else if (coins >= 20) {
            coins -= 20;
        }
        else if (coins >= 10) {
            coins -= 10;
        }
        else if (coins >= 5) {
            coins -= 5;
        }
        else if (coins >= 2) {
            coins -= 2;
        }
        else if (coins >= 1) {
            coins -= 1;
        }

        coinsCounter++;
    }
    console.log(coinsCounter);

}
coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);