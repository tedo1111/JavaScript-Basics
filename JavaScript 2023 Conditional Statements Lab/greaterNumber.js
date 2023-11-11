function greaterNumber(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let max = 0;
    if (num1 > num2) {
        max = num1;
    }
    else {
        max = num2;
    }


    console.log(max);
}
greaterNumber(["5", "3"]);
