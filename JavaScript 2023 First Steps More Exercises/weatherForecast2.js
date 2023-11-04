function weatherForecast2(input) {

    let temperature = Number(input[0]);


    if (temperature >= 5 && temperature <= 11.9) {
        console.log(`Cold`);
    }
    else if (temperature >= 12 && temperature <= 14.9) {
        console.log(`Cool`);
    }
    else if (temperature >= 15 && temperature <= 20.00) {
        console.log(`Mild`);
    }
    else if (temperature >= 20.1 && temperature <= 25.9) {
        console.log(`Warm`);
    }
    else if (temperature >= 26 && temperature <= 35.00) {
        console.log(`Hot`);
    }
    else {
        console.log(`unknown`);
    }

}
weatherForecast2(["16.5"]);
weatherForecast2(["8"]);
weatherForecast2(["22.4"]);
weatherForecast2(["26"]);
weatherForecast2(["0"]);