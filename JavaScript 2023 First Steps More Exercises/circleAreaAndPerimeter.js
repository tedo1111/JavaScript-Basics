function circleAreaAndPerimeter(input) {

    let r = Number(input[0]);

    let face = Math.PI * r * r;

    let perimeter = Math.PI * r * 2;

    console.log(face.toFixed(2));
    console.log(perimeter.toFixed(2));

}
circleAreaAndPerimeter(["35.875"]);