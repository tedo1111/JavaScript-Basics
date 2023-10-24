function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volumeInLiters = length * width * height * 0.001;
    let space = percent / 100;

    let needed = volumeInLiters * (1 - space);

    console.log(needed);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);