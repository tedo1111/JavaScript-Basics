function readText(input) {

    let index = 0;
    let currentElemet = input[index];

    while (currentElemet !== `Stop`) {
        console.log(currentElemet);
        ++index;
        currentElemet = input[index];
    }

}
readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]);
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);
