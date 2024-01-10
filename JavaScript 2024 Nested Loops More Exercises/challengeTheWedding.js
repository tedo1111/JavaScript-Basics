function challengeTheWedding(input) {

    let m = Number(input[0]);
    let f = Number(input[1]);
    let maxTables = Number(input[2]);

    let counter = 0;
    let res = '';

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= f; j++) {

            counter++;
            res += `(${i} <-> ${j}) `;

            if (counter === maxTables) {
                break;
            }
        }
        if (counter === maxTables) {
            break;
        }

    }
    console.log(res);

}
challengeTheWedding(["2", "2", "6"]);
// challengeTheWedding(["2", "2", "3"]);
// challengeTheWedding(["5", "8", "40"]);