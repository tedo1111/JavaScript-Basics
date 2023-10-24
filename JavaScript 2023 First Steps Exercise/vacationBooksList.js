function vacationBooksList(input) {

    let pages = Number(input[0]);
    let pagesForOneHour = Number(input[1]);
    let daysFoReading = Number(input[2]);

    let totalTime = pages / pagesForOneHour;
    let timeForDay = totalTime / daysFoReading;

    console.log(timeForDay);

}
vacationBooksList(["212 ", "20 ", "2 "]);