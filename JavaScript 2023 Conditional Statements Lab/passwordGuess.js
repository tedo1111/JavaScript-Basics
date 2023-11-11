function passwordGuess(input) {
    let pass = input[0];

    if (pass !== `s3cr3t!P@ssw0rd`) {
        console.log(`Wrong password!`);
    }
    else {
        console.log(`Welcome`);
    }

}

passwordGuess(["s3cr3t!P@ssw0rd"]);