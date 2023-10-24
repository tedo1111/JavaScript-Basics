function hello(input) {
    let x = +input[0];

    let args = Array.from(x)
    let result = 0;
    let i = 0;
    let n = args[i];

    while (n >= 0) {
        result = n * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        n = args[++i];
    }

    if (n < 0) {
        console.log('Negative number!');
    }

}



hello(["12", "43.2144", "12.3"]);

