function weddingSeats(input) {

    let lastSector = input[0];
    let rows = Number(input[1]);
    let oddSeats = Number(input[2]);

    let counter = 0;
    let factor = 0;

    for (let i = 'A'.charCodeAt(0); i <= lastSector.charCodeAt(0); i++, rows++) {
        for (let j = 1; j <= rows; j++) {
            factor = (j % 2 === 0) ? 2 : 0;
            for (let k = 'a'.charCodeAt(0); k < 'a'.charCodeAt(0) + parseInt(oddSeats) + factor; k++) {
                console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`);
                counter++;
            }
        }
    }
    console.log(counter);

}
weddingSeats(["B", "3", "2"]);
weddingSeats(["C", "4", "2"]);