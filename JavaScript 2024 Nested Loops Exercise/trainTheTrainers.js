function trainTheTrainers(input) {

    let judges = Number(input[0]);
    let name = "";

    let avg = 0;
    let sumGrades = 0;
    let toltalSum = 0;
    let judgeSum = 0;

    let index = 1;
    let currentElement = input[index];

    while (currentElement !== `Finish`) {
        name = currentElement;
        index++;
        currentElement = input[index];

        grade = Number(currentElement);

        for (let i = 1; i <= judges; i++) {
            sumGrades += Number(currentElement);
            index++;
            currentElement = input[index];

        }


        console.log(`${name} - ${(sumGrades / judges).toFixed(2)}.`);
        toltalSum += sumGrades;
        judgeSum += judges;
        sumGrades = 0;

    }
    console.log(`Student's final assessment is ${(toltalSum / judgeSum).toFixed(2)}.`);
}
trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);