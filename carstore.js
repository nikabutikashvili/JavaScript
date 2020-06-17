class Car {
    constructor(brand, color, model, year, horsepower, price) {
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.year = year;
        this.horsepower = horsepower;
        this.price = price;
    }
}

export const carstore = (function() {
    let car1 = new Car("BMW", "Grey", "M5", 2015, 200, 30000 );
    let car2 = new Car("Mercedes", "Golden", "CLS", 2020, 190, 32000 );
    let car3 = new Car("Honda", "Silver", "Civic", 2007, 150, 8000 );
    let car4 = new Car("Toyota", "Black", "Corrola", 2012, 130, 12000 );
    let cars = [car1, car2, car3, car4];

    return {
        getCars() {
            return cars;
        }
    }
})();
