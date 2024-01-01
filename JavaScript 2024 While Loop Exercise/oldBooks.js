function oldBooks(input) {

    let searchedBook = input[0];

    let index = 1;
    let currentElement = input[index];

    let book = "";
    let bookCounter = 0;

    while (currentElement !== `No More Books`) {

        if (currentElement === searchedBook) {
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }

        bookCounter++;


        index++;
        currentElement = input[index];
    }
    if (currentElement !== searchedBook) {
        console.log(`The book you search is not here!\nYou checked ${bookCounter} books.`);
    }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);