function examPreparation(input) {

    let badGrades = Number(input[0]);

    let index = 1;
    let currentElement = input[index];
    numOfProblems = 0;

    let name = "";
    let grade = 0;
    let avgGrade = 0;
    let gradeCounter = 0;
    let lastProblemName = "";
    let bad = 0;

    while (currentElement !== `Enough`) {

        name = currentElement;
        index++;
        currentElement = input[index];
        grade = Number(currentElement);
        gradeCounter += grade;
        numOfProblems++;

        if (grade <= 4) {
            bad++;
        }
        if (bad >= badGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }

        index++;
        currentElement = input[index];

    }

    avgGrade = gradeCounter / numOfProblems;
    lastProblemName = name;


    if (currentElement === `Enough`) {
        console.log(`Average score: ${avgGrade.toFixed(2)}\nNumber of problems: ${numOfProblems}\nLast problem: ${lastProblemName}`);
    }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);