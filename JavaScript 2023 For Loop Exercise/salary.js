function salary(input) {

    let tabs = Number(input[0]);
    let money = Number(input[1]);



    for (let index = 2; index < input.length; index++) {
        let website = input[index];

        if (website === "Facebook") {
            money -= 150;
        }
        else if (website === "Instagram") {
            money -= 100;
        }
        else if (website === "Reddit") {
            money -= 50;
        }

    }


    if (money <= 0) {
        console.log(`You have lost your salary.`);
    }
    else {
        console.log(money);
    }
}
salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);