function lunchBreak(input) {

    let name = (input[0]);
    let durationOfEp = Number(input[1]);
    let durationOfBreak = Number(input[2]);

    let lunchTime = durationOfBreak / 8;
    let restTime = durationOfBreak / 4;

    let leftTime = durationOfBreak - lunchTime - restTime;


    if (leftTime >= durationOfEp) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(leftTime - durationOfEp)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(durationOfEp - leftTime)} more minutes.`);
    }

}
lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);

