let car1 = {
    brand: "BMW",
    color: "Grey",
    model: "M5",
    year: 2015,
    horsepower: 200,
    price: 30000
};

let car2 = {
    brand: "Toyota",
    color: "Black",
    model: "Corrola",
    year: 2012,
    horsepower: 130,
    price: 12000
};

let car3 = {
    brand: "Honda",
    color: "Silver",
    model: "Civic",
    year: 2007,
    horsepower: 150,
    price: 8000
}; 

let car4 = {
    brand: "Mercedes",
    color: "Golden",
    model: "CLS",
    year: 2020,
    horsepower: 190,
    price: 32000
}
// Task 1
let cars = [car1, car2, car3, car4];
let totalPriceOfCars = 0;
for (let i = 0; i < cars.length; i++) {
    totalPriceOfCars += cars[i].price;
}
let averagePriceOfCars = totalPriceOfCars/cars.length;
console.log(`ჩვენს მაგარში არსებული მანქანების საშუალო ფასი არის: ${averagePriceOfCars}`);

// Task 2
let maxPriceOfCar = 0;
for (let i = 0; i < cars.length; i++) {
    if(cars[i].price > maxPriceOfCar) {
        maxPriceOfCar = cars[i].price;
    }
}
console.log(`ჩვენს კოლექციაში ყველაზე ძვირიანი მანქანის ფასი არის: ${maxPriceOfCar}`);


// Task 3
user1 = {
    username: "John2233",
    password: "1234"
};
user2 = {
    username: "Bob443",
    password: "2356"
};
user3 = {
    username: "Jack665",
    password: "7788"
};
user4 = {
    username: "Kate776",
    password: "998800022"
};
user5 = {
    username: "Nick887",
    password: "6644"
};

users = [user1, user2, user3, user4, user5];
function logOn(possibleUsername, possiblePassword) {
    let user = {
        username: '',
        password: ''
    };
    for (let i = 0; i < users.length; i++) {
        if(possibleUsername === users[i].username){
            user = users[i];
        }
    }
    if(!user.username) {
        console.log("მომხმარებელი არ მოიძებნა");
    } else {
        if(possiblePassword === user.password) {
            if(user.password.length < 8) {
                console.log("შეხვედით სისტემაში წარმატებით, თუმცა გთხოვთ შეცვალოთ პაროლი");
            } else {
                console.log("შეხვედით სისტემაში წარმატებით");
            }
        } else {
            console.log("პაროლი არასწორია");
        }
    }
};
logOn("Jake882", "5552");
logOn("Bob443", "5999");
logOn("Kate776", "998800022");
logOn("Nick887", "6644");





