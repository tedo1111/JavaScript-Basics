function grades(input) {

    let students = Number(input[0]);
    let grade2to3 = 0;
    let grade3to4 = 0;
    let grade4to5 = 0;
    let grade5plus = 0;
    let totalGrade = 0;


    for (let i = 1; i <= students; i++) {
        let grade = Number(input[i]);
        totalGrade += grade;

        {
            if (grade >= 2 && grade < 3) {
                grade2to3++;
            }
            else if (grade >= 3 && grade < 4) {
                grade3to4++;
            }
            else if (grade >= 4 && grade < 5) {
                grade4to5++
            }
            else {
                grade5plus++;
            }
        }
    }

    let avgGrade = totalGrade / students;


    console.log(`Top students: ${(((grade5plus / students) * 100).toFixed(2))}%`);
    console.log(`Between 4.00 and 4.99: ${(((grade4to5 / students) * 100).toFixed(2))}%`);
    console.log(`Between 3.00 and 3.99: ${(((grade3to4 / students) * 100).toFixed(2))}%`);
    console.log(`Fail: ${(((grade2to3 / students) * 100).toFixed(2))}%`);
    console.log(`Average: ${avgGrade.toFixed(2)}`);
}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);
