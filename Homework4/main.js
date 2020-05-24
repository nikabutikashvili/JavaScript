let car1 = {
    brand: "BMW",
    color: "Grey",
    model: "M5",
    year: 2015,
    horsepower: 200,
    price: 30000
};

let car2 = {
    brand: "Mercedes",
    color: "Golden",
    model: "CLS",
    year: 2020,
    horsepower: 190,
    price: 32000
}

let car3 = {
    brand: "Honda",
    color: "Silver",
    model: "Civic",
    year: 2007,
    horsepower: 150,
    price: 8000
}; 

let car4 = {
    brand: "Toyota",
    color: "Black",
    model: "Corrola",
    year: 2012,
    horsepower: 130,
    price: 12000
};

cars = [car1, car2, car3, car4];
function details(carIndex) {
    alert(`brand: ${cars[carIndex].brand} \ncolor: ${cars[carIndex].color} \nmodel: ${cars[carIndex].model} \nyear: ${cars[carIndex].year} \nhorsepower: ${cars[carIndex].horsepower} \nprice: ${cars[carIndex].price}`);
};
function pricesLessThan() {
    let preferredPrice = parseInt(document.getElementById("preferredPrice").value);
    let x = preferredPrice.toString();
    if(x === "NaN") {
        alert("გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში");
    } else {
        preferredPrice = parseInt(x);
        let preferredcars = [];
        for (let i = 0; i < cars.length; i++) {
            if (cars[i].price < parseInt(preferredPrice)) {
                preferredcars.push(cars[i]);
            }
        }
        let result = "";
        for (let i = 0; i < preferredcars.length; i++) {
            result += `brand: ${preferredcars[i].brand} \ncolor: ${preferredcars[i].color} \nmodel: ${preferredcars[i].model} \nyear: ${preferredcars[i].year} \nhorsepower: ${preferredcars[i].horsepower} \nprice: ${preferredcars[i].price}\n\n`; 
        }
        alert(result);
    }
   
}




