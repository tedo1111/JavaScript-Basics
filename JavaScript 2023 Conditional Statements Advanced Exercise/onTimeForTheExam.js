function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let examHourToMin = examHour * 60;
    let arriveHourToMin = arriveHour * 60;

    let examTotal = examHourToMin + examMin;
    let arriveTotal = arriveHourToMin + arriveMin;

    let before = examTotal - arriveTotal;
    let after = arriveTotal - examTotal;

    let hourA = Math.floor(after / 60);
    let minA = after % 60;

    let hourB = Math.floor(before / 60);
    let minB = before % 60;

    minB = minB <= 9 ? '0' + minB : minB;
    minA = minA <= 9 ? '0' + minA : minA;

    if (arriveTotal > examTotal) {
        console.log(`Late`);

        if (after < 60) {
            console.log(`${(after)} minutes after the start`);
        } else {
            console.log(`${hourA}:${minA} hours after the start`);
        }
    } else if (arriveTotal >= examTotal - 30) {
        console.log(`On time`);
        if (arriveTotal < examTotal) {
            if (before >= 60) {
                console.log(`${hourB}:${minB} hours before the start`);
            } else {
                console.log(`${(before)} minutes before the start`);
            }
        }
    } else {
        console.log(`Early`);
        if (arriveTotal < examTotal) {
            if (before >= 60) {
                console.log(`${hourB}:${minB} hours before the start`);
            } else {
                console.log(`${(before)} minutes before the start`);
            }
        }
    }
}

onTimeForTheExam(["9", "30", "9", "50"])
onTimeForTheExam(["9", "00", "8", "30"])
onTimeForTheExam(["16", "00", "15", "00"])
onTimeForTheExam(["9", "00", "10", "30"])
onTimeForTheExam(["14", "00", "13", "55"])
onTimeForTheExam(["11", "30", "8", "12"])
onTimeForTheExam(["10", "00", "10", "00"])
onTimeForTheExam(["11", "30", "10", "55"])
onTimeForTheExam(["11", "30", "12", "29"])