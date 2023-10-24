function concatenateData(input) {

    let firstName = input[0];
    let secName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`You are ${firstName} ${secName}, a ${age}-years old person from ${town}.`);

}
concatenateData([`Maria`, `Ivanova`, 20, `Sofia`]);