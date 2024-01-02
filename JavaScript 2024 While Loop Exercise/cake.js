function cake(input) {

    let cakeX = Number(input[0]);
    let cakeY = Number(input[1]);

    let index = 2;
    let currentElement = input[index];

    let cakePices = cakeX * cakeY;

    while (currentElement !== `STOP`) {

        cakePices -= Number(currentElement);

        if (cakePices <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakePices)} pieces more.`);
            break;
        }

        index++;
        currentElement = input[index];
    }

    if (cakePices > 0) {
        console.log(`${cakePices} pieces are left.`);
    }

}
cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);