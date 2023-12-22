function footballLeague(input) {

    let capacity = Number(input[0]);
    let allFans = Number(input[1]);

    let A = 0;
    let B = 0;
    let V = 0;
    let G = 0;


    for (let i = 2; i < input.length; i++) {
        let sector = input[i];

        switch (sector) {
            case "A":
                A++;
                break;
            case "B":
                B++;
                break;
            case "V":
                V++;
                break;
            case "G":
                G++;
                break;

            default:
                break;
        }

    }

    let sectorA = A / allFans * 100;
    let sectorB = B / allFans * 100;
    let sectorV = V / allFans * 100;
    let sectorG = G / allFans * 100;

    let all = allFans / capacity * 100;



    console.log(sectorA.toFixed(2) + "%");
    console.log(sectorB.toFixed(2) + "%");
    console.log(sectorV.toFixed(2) + "%");
    console.log(sectorG.toFixed(2) + "%");
    console.log(all.toFixed(2) + "%");
}
footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
// footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
// footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);