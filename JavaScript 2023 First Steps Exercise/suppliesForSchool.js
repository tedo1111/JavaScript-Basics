function suppliesForSchool(input) {

    let pens = Number(input[0]);
    let marker = Number(input[1]);
    let cleaner = Number(input[2]);
    let discount = Number(input[3]);


    let discountPrice = ((pens * 5.8) + (marker * 7.2) + (cleaner * 1.2)) * (discount / 100);
    let price = (pens * 5.8) + (marker * 7.2) + (cleaner * 1.2) - discountPrice;

    console.log(price);

}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);