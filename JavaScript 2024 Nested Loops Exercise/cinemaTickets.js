function cinemaTickets(input) {

    let movieName = "";
    let freePlaces = 0;

    let kid = 0;
    let standard = 0;
    let student = 0;
    let total = 0;
    let totalTickets = 0;
    let totalKid = 0;
    let totalStandard = 0;
    let totalStudent = 0;



    let index = 0;
    let currentElement = input[index];

    while (currentElement !== `Finish`) {
        movieName = currentElement;
        index++;
        currentElement = input[index];
        freePlaces = Number(currentElement);

        index++;
        currentElement = input[index];

        while (currentElement !== `End`) {



            if (currentElement === `kid`) {
                kid++;
                total++;
            }
            else if (currentElement === `student`) {
                student++;
                total++;
            }
            else if (currentElement === `standard`) {
                standard++;
                total++;
            }

            if (currentElement === `Finish`) {
                break;
            }
            if (total >= freePlaces) {
                break;
            }
            index++;
            currentElement = input[index];


        }
        console.log(`${movieName} - ${((total / freePlaces) * 100).toFixed(2)}% full.`);
        index++;
        totalTickets += total;
        totalKid += kid;
        totalStandard += standard
        totalStudent += student;
        kid = 0;
        student = 0;
        standard = 0;
        total = 0;
        if (currentElement === `Finish`) {
            break;
        }
        currentElement = input[index];

    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((totalStudent / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((totalStandard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalKid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);
cinemaTickets(["Shutter Island", "9", "standard", "standard", "standard", "student", "student", "student", "kid", "kid", "kid", "Rush", "9", "standard", "standard", "standard", "student", "student", "student", "kid", "kid", "kid", "Deadpool", "9", "standard", "standard", "standard", "student", "student", "student", "kid", "kid", "kid", "Finish"]);

