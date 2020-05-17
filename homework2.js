//Task 1

let car = {
    brand: "Audi",
    color: "White",
    model: "A4",
    year: 2019,
    horsepower: 190,
    price: 20000
}
console.log("This car has a following characteristis: \n brand: " + car.brand + "\n color: " + car.color + "\n model: " + car.model + "\n year: " + car.year + "\n horsepower: " + car.horsepower + "\n price: " + car.price);


//Task 2
let BMW = {
    brand: "BMW",
    color: "Grey",
    model: "M5",
    year: 2015,
    horsepower: 200,
    price: 30000
};

let Toyota = {
    brand: "Toyota",
    color: "Black",
    model: "Corrola",
    year: 2012,
    horsepower: 130,
    price: 12000
};

let Honda = {
    brand: "Honda",
    color: "Silver",
    model: "Civic",
    year: 2007,
    horsepower: 150,
    price: 8000
}; 

let Mercedes = {
    brand: "Mercedes",
    color: "Golden",
    model: "CLS",
    year: 2020,
    horsepower: 190,
    price: 32000
}

console.log("\n");
let priceLess15k = [];
let temporaryArray = [];
let cars = [ BMW, Toyota, Honda, Mercedes];
for (let i = 0; i < cars.length; i++) {
    if (cars[i].price < 15000) {
        temporaryArray.push(cars[i].brand);
        temporaryArray.push(cars[i].model);
        priceLess15k.push(temporaryArray);
        temporaryArray = [];
    } 
};
if (priceLess15k) {
    for (let j = 0; j < priceLess15k.length; j++) {
        console.log("Brand: "+ priceLess15k[j][0] + "\t Model: " + priceLess15k[j][1]);
    }
}
else {
    console.log("Unfortunately, no car has been found within this price");
}