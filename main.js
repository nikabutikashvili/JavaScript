import {carstore} from './carstore.js'
import {Statistics} from './statistics.js'
import {searchByPrice} from './search.js'
const cars = carstore.getCars();
const stat = new Statistics(cars);

const catalog = document.getElementById("catalogue")
catalog.addEventListener('click', event => {
    let carIndex = event.target.id;
    alert(`brand: ${cars[carIndex].brand} \ncolor: ${cars[carIndex].color} \nmodel: ${cars[carIndex].model} \nyear: ${cars[carIndex].year} \nhorsepower: ${cars[carIndex].horsepower} \nprice: ${cars[carIndex].price}`);
}
);

for (let i = 0; i < cars.length; i++) {
    let carTitel = document.getElementById(cars[i].brand);
    carTitel.querySelector('p').innerHTML = `${cars[i].brand} ${cars[i].model}`;
}

document.querySelector('#searchCar').addEventListener('click', function() {
    let preferredPrice = parseInt(document.getElementById("preferredPrice").value);
    searchByPrice(preferredPrice, cars);
})


document.querySelector('#avg').addEventListener('click', function() {
    stat.averagePrice(cars);
})
document.querySelector('#mostExpensive').addEventListener('click', function() {
    stat.mostExpensiveCar(cars);
})
document.querySelector('#cheapest').addEventListener('click', function() {
    stat.cheapestCar(cars);
})
