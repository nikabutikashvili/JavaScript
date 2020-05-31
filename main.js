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

for (let i = 0; i < cars.length; i++) {
    let carTitel = document.getElementById(cars[i].brand);
    carTitel.querySelector('p').innerHTML = `${cars[i].brand} ${cars[i].model}`;
}

function averagePrice() {
    let sumOfPrices = 0;
    for (let i = 0; i < cars.length; i++) {
        sumOfPrices += cars[i].price;
    }
    let averagePrice = sumOfPrices/cars.length;
    alert("ჩვენს საიტზე არსებული მანქანების საშუალო ღირებულება არის: " + averagePrice);
}

function reset() {
    for (let i = 0; i < cars.length; i++) {
        let car = document.getElementById(cars[i].brand);
        car.className = "car";
    }
}

function mostExpensiveCar() {
    reset();
    let mostExpensiveCar = cars[0];
    for (let i = 1; i < cars.length; i++) {
        if(mostExpensiveCar < cars[i].price){
            mostExpensiveCar.price = cars[i];
        }
    }
    let notMostExpensiveCar = [];
    for (let i = 0; i < cars.length; i++) {
        if(cars[i].brand !== mostExpensiveCar.brand) {
            notMostExpensiveCar.push(cars[i]);
        }
    }
    for (let i = 0; i < notMostExpensiveCar.length; i++) {
        document.getElementById(notMostExpensiveCar[i].brand).className = "hide";
    }
}

function cheapestCar() {
    reset();
    let cheapestCar = cars[0];
    for (let i = 1; i < cars.length; i++) {
        if(cheapestCar.price > cars[i].price) {
            cheapestCar = cars[i];
        }
    }
    let notCheapestcars = [];
    for (let i = 0; i < cars.length; i++) {
        if(cars[i].brand !== cheapestCar.brand) {
            notCheapestcars.push(cars[i]);
        }
    }
    for (let i = 0; i < notCheapestcars.length; i++) {
        document.getElementById(notCheapestcars[i].brand).className = "hide";
    }
}

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
        if (preferredcars.length === 0) {
            alert("სამწუხაროდ, ამ ფასში მანქანა ვერ მოიძებნა");
        } else {
            let result = "";
            for (let i = 0; i < preferredcars.length; i++) {
            result += `Brand: ${preferredcars[i].brand} \nModel: ${preferredcars[i].model} \nPrice: $${preferredcars[i].price}\n\n`; 
            }
            alert(result);
        }
    }
}





