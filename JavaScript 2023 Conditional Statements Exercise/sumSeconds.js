function sumSeconds(input) {

    let sec1 = Number(input[0]);
    let sec2 = Number(input[1]);
    let sec3 = Number(input[2]);

    let totalSec = sec1 + sec2 + sec3;
    let min = 0;
    let hour = 0;

    if (totalSec >= 60) {
        hour = Math.floor(totalSec / 60);
        min = totalSec % 60;

    }
    else {
        hour = 0;
        min = totalSec;
    }

    if (min < 10) {
        console.log(`${hour}:0${min}`);
    }
    else {
        console.log(`${hour}:${min}`);
    }


}
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);