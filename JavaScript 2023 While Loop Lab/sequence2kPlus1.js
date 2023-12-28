function sequence2kPlus1(input) {

    let number = Number(input[0]);



    let index = 1;

    while (index <= number) {

        console.log(index);
        index = 2 * index + 1;
    }

}
sequence2kPlus1(["3"]);
sequence2kPlus1(["8"]);
sequence2kPlus1(["17"]);
sequence2kPlus1(["31"]);