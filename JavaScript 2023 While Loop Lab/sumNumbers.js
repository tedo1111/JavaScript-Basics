function sumNumbers(input) {

    let number = Number(input[0]);

    let sum = 0;

    let index = 1;
    let currentElemet = input[index];

    while (sum < number) {
        sum += currentElemet;
        index++;
        currentElemet = input[index];
    }
    console.log(sum);

}
sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);