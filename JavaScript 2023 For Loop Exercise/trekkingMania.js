function trekkingMania(input) {

    let group = Number(input[0]);
    let count = Number(input[1]);

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;
    for (let i = 1; i <= group; i++) {


        let people = Number(input[i]);
        if (people <= 5) {
            musala += people;
            total += people
        }
        else if (people >= 6 && people <= 12) {
            monblan += people;
            total += people
        }
        else if (people >= 13 && people <= 25) {
            kilimanjaro += people;
            total += people
        }
        else if (people >= 26 && people <= 40) {
            k2 += people;
            total += people
        }
        else if (people >= 41) {
            everest += people;
            total += people
        }



    }

    let musalaResult = musala / total * 100;
    let monblanResult = monblan / total * 100;
    let kilimanjaroResult = kilimanjaro / total * 100;
    let k2Result = k2 / total * 100;
    let everestResult = everest / total * 100;


    console.log(musalaResult.toFixed(2) + "%");
    console.log(monblanResult.toFixed(2) + "%");
    console.log(kilimanjaroResult.toFixed(2) + "%");
    console.log(k2Result.toFixed(2) + "%");
    console.log(everestResult.toFixed(2) + "%");

}
trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
trekkingMania(["5", "25", "41", "31", "250", "6"]);
