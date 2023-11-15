function timePlus15Minutes(input) {

    let hour = Number(input[0]);
    let min = Number(input[1]);

    let hourToMin = hour * 60;
    let totalMin = min + hourToMin + 15;

    let newHour = Math.floor(totalMin / 60);
    let newMin = totalMin % 60;



    if (totalMin >= 60) {
        newHour = Math.floor(totalMin / 60);
        newMin = totalMin % 60;

    }
    else {
        newHour = 0;
        newMin = totalMin;
    }

    if (newHour === 24) {
        newHour = 0;
    }

    if (newMin < 10) {
        console.log(`${newHour}:0${newMin}`);
    }
    else {
        console.log(`${newHour}:${newMin}`);
    }


}
timePlus15Minutes(["1", "46"])
timePlus15Minutes(["0", "01"])
timePlus15Minutes(["23", "59"])
timePlus15Minutes(["11", "08"])
timePlus15Minutes(["12", "49"])

