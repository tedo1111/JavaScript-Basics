function sleepyTomCat(input) {

    let holidays = Number(input[0]);

    let workDays = 365 - holidays;

    let playtime = workDays * 63 + holidays * 127;



    let norm = 30000;
    let normDiff = Math.abs(norm - playtime);

    let hour = Math.floor(normDiff / 60);
    let min = normDiff % 60;



    if (playtime > norm) {
        console.log(`Tom will run away`);
        console.log(`${hour} hours and ${min} minutes more for play`);
    }
    else {
        console.log(`Tom sleeps well`);
        console.log(`${hour} hours and ${min} minutes less for play`);
    }

}
sleepyTomCat(["20"]);
sleepyTomCat(["113"]);
