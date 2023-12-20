function hospital(input) {

    let period = Number(input[0]);

    let treated = 0;
    let untreated = 0;
    let doctors = 7;
    let day = 0;


    for (let i = 1; i <= period; i++) {
        let patient = Number(input[i]);
        day++;

        if (day % 3 === 0) {
            if (untreated > treated)
                doctors++;
        }

        if (doctors >= patient) {
            treated += patient;
        }
        else {

            treated += doctors;
            untreated += patient - doctors;

        }
    }


    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);

}

hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);