function whileLoop(input) {

    let n = +input[0];
    let umnojenie = 0;
    let suma = 0;
    let result = '';
    let found = false;
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    suma = a + b + c + d;
                    umnojenie = a * b * c * d;

                    if (suma === umnojenie && n % 10 === 5) {
                        result = String(a) + String(b) + String(c) + String(d);
                        console.log(result);
                        found = true;
                        return;
                    }

                    if ((umnojenie % suma) >= 3 && n % 3 === 0) {
                        result = String(d) + String(c) + String(b) + String(a)
                        console.log(result);
                        found = true;
                        return;
                    }
                }
            }
        }
    }


    if (!found) {
        console.log("Nothing found");
    }
}


whileLoop(["123"]);