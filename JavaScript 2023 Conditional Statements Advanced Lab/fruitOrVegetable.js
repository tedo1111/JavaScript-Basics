function fruitOrVegetable(input) {

    let product = input[0];

    switch (product) {
        case "grapes":
        case "lemon":
        case "cherry":
        case "kiwi":
        case "apple":
        case "banana":

            console.log(`fruit`);
            break;
        case "carrot":
        case "pepper":
        case "cucumber":
        case "tomato":

            console.log(`vegetable`);
            break;

        default:
            console.log(`unknown`);
            break;
    }

}
fruitOrVegetable(["banana"]);
fruitOrVegetable(["apple"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);