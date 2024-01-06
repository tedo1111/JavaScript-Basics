function sumPrimeNonPrime(input) {
    let prime = 0;
    let nonPrime = 0;

    let index = 0;
    let currentElement = input[index];

    while (currentElement !== 'stop') {
        let num = Number(currentElement);

        if (isNaN(num) || num < 0) {
            console.log(`Number is negative.`);
            index++;
            currentElement = input[index];
            continue;
        }

        let isPrime = true;

        if (num === 1) {
            prime += num;
        } else if (num > 1) {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            prime += num;
        } else {
            nonPrime += num;
        }

        index++;
        currentElement = input[index];
    }

    console.log(`Sum of all prime numbers is: ${prime}\nSum of all non prime numbers is: ${nonPrime}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrimeNonPrime(["0", "-9", "0", "stop"]);