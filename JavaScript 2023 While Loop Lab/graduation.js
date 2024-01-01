function graduation(input) {

    let name = input[0];
    let index = 1;
    let currentElemet = Number(input[index]);

    let avgGrade = 0;
    let gradeCounter = 0;
    let badGradeCounter = 0;
    let classCounter = 0;

    while (currentElemet <= 12) {

        if (currentElemet < 4) {
            badGradeCounter++;
        }
        if (badGradeCounter >= 2) {
            console.log(`${name} has been excluded at ${classCounter} grade`);
            break;
        }

        classCounter++;
        gradeCounter += currentElemet;

        index++;
        currentElemet = Number(input[index]);
    }

    avgGrade = gradeCounter / 12;
    if (badGradeCounter < 2) {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]); 