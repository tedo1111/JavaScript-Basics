function moving(input) {

    let widthSpace = Number(input[0]);
    let lengthSpace = Number(input[1]);
    let heightSpace = Number(input[2]);

    let freeSpace = widthSpace * lengthSpace * heightSpace;
    boxes = 0;

    let index = 3;
    let currentElement = input[index];

    while (currentElement !== `Done`) {

        boxes += Number(currentElement);

        if (boxes > freeSpace) {
            console.log(`No more free space! You need ${(Math.abs(freeSpace - boxes))} Cubic meters more.`);
            break;
        }

        index++;
        currentElement = input[index];

    }

    if (boxes < freeSpace) {
        console.log(`${freeSpace - boxes} Cubic meters left.`);
    }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);