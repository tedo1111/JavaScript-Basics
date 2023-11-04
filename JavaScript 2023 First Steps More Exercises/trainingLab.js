function trainingLab(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);

    let hallLenght = length * 100;
    let hallWidth = width * 100 - 100;


    let deskWidth = Math.floor(hallWidth / 70);

    let deskInRow = deskWidth * 70
    let diffRow = hallWidth - deskInRow;


    let desklenght = Math.floor(hallLenght / 120);

    let deskInColumn = desklenght * 120;
    let diffColumn = hallLenght - deskInColumn;

    let places = desklenght * deskWidth - 3;

    console.log(places);
}
trainingLab(["15", "8.9"]);