function cinema(input) {

    let projection = input[0];
    let rows = Number(input[1]);
    let column = Number(input[2]);

    let price = 0;
    if (projection === `Premiere`) {
        price = rows * column * 12;
    }
    else if (projection === `Normal`) {
        price = rows * column * 7.5;
    }
    else if (projection === `Discount`) {
        price = rows * column * 5;
    }

    console.log(price.toFixed(2));
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);