function worldSwimmingRecord(input) {

    let recordInSec = Number(input[0]);
    let distanceInM = Number(input[1]);
    let secForOneM = Number(input[2]);

    let timeInSec = distanceInM * secForOneM;

    let addSec = ((Math.floor(distanceInM / 15)) * 12.5);

    let totaTime = timeInSec + addSec;


    if (totaTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${(totaTime).toFixed(2)} seconds.`);
    }
    else if (totaTime >= recordInSec) {
        console.log(`No, he failed! He was ${Math.abs(recordInSec - totaTime).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
