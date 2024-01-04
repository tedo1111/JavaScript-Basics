function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    let apart = `A`;
    let office = `O`;
    let large = `L`;

    for (let i = floors; i > 0; i--) {

        let floorString = '';

        for (let j = 0; j < rooms; j++) {

            if (i === floors) {
                floorString += `L` + i + j + " ";
            }


            else if (i % 2 === 0) {
                floorString += `O` + i + j + " ";
            }
            else {
                floorString += `A` + i + j + " ";
            }
        }
        console.log(floorString);
    }

}
building(["6", "4"]);
building(["9", "5"]);
building(["4", "4"]);