function projectsCreation(input) {

    let architectName = input[0];
    let projects = Number(input[1]);

    let time = projects * 3;


    console.log(`The architect ${architectName} will need ${time} hours to complete ${projects} project/s.`);

}
projectsCreation(["George ", "4 "]);