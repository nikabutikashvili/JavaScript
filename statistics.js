import {reset} from './stathelper.js';
export class Statistics {
    constructor(cars) {
        this.cars = cars;
    }
    averagePrice() {
        let sumOfPrices = 0;
        for (let i = 0; i < this.cars.length; i++) {
            sumOfPrices += this.cars[i].price;
        }
        let averagePrice = sumOfPrices/this.cars.length;
        alert("ჩვენს საიტზე არსებული მანქანების საშუალო ღირებულება არის: " + averagePrice);
    }
    mostExpensiveCar() {
        reset(this.cars);
        let mostExpensiveCar = this.cars[0];
        for (let i = 1; i < this.cars.length; i++) {
            if(mostExpensiveCar < this.cars[i].price){
                mostExpensiveCar.price = this.cars[i];
            }
        }
        let notMostExpensiveCar = [];
        for (let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].brand !== mostExpensiveCar.brand) {
                notMostExpensiveCar.push(this.cars[i]);
            }
        }
        for (let i = 0; i < notMostExpensiveCar.length; i++) {
            document.getElementById(notMostExpensiveCar[i].brand).className = "hide";
        }
    }
    cheapestCar() {
        reset(this.cars);
        let cheapestCar = this.cars[0];
        for (let i = 1; i < this.cars.length; i++) {
            if(cheapestCar.price > this.cars[i].price) {
                cheapestCar = this.cars[i];
            }
        }
        let notCheapestcars = [];
        for (let i = 0; i < this.cars.length; i++) {
            if(this.cars[i].brand !== cheapestCar.brand) {
                notCheapestcars.push(this.cars[i]);
            }
        }
        for (let i = 0; i < notCheapestcars.length; i++) {
            document.getElementById(notCheapestcars[i].brand).className = "hide";
        }
    }
}