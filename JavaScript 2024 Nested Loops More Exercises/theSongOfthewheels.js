function theSongOfthewheels(input) {

    let num = Number(input[0]);

    let counter = 0;

    let g = 1;
    let h = 1;
    let j = 1;
    let k = 1;

    res = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (num === a * b + c * d) {
                        if (a < b && c > d) {
                            res += (`${a}${b}${c}${d} `);
                            counter++;


                            if (counter === 4) {
                                g = a;
                                h = b;
                                j = c;
                                k = d;
                            }
                        }
                    }
                }

            }

        }

    }

    res = res.trim();
    console.log(res);

    if (counter >= 4) {
        console.log(`Password: ${g}${h}${j}${k}`);
    } else {
        console.log("No!");
    }
}
theSongOfthewheels(["11"]);
// theSongOfthewheels(["139"]);
// theSongOfthewheels(["110"]);
// theSongOfthewheels(["55"]);