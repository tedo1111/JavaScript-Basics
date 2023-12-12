function multiplicationTable(input) {

    let num = Number(input[0]);
    let result = 0;

    for (let index = 1; index <= 10; index++) {

        result = index * num;

        console.log(`${index} * ${num} = ${result}`);
    }

}
multiplicationTable(["5"]);