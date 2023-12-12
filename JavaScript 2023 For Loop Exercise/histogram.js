function histogram(input) {

    let num = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let counter = 0;
    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;
    let countP4 = 0;
    let countP5 = 0;

    for (index = 1; index <= num; index++) {
        let number = Number(input[index]);
        counter++;
        if (number < 200) {
            p1 += number;
            countP1++;
        }
        else if (number >= 200 && number <= 399) {
            p2 += number;
            countP2++;
        }
        else if (number >= 400 && number <= 599) {
            p3 += number;
            countP3++;
        }
        else if (number >= 600 && number <= 799) {
            p4 += number;
            countP4++;
        }
        else if (number >= 800) {
            p5 += number;
            countP5++;
        }


    }

    let resultP1 = countP1 / num * 100;
    let resultP2 = countP2 / num * 100;
    let resultP3 = countP3 / num * 100;
    let resultP4 = countP4 / num * 100;
    let resultP5 = countP5 / num * 100;

    console.log(resultP1.toFixed(2) + "%");
    console.log(resultP2.toFixed(2) + "%");
    console.log(resultP3.toFixed(2) + "%");
    console.log(resultP4.toFixed(2) + "%");
    console.log(resultP5.toFixed(2) + "%");

}
histogram(["3", "1", "2", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"]);