export function reset(cars) {
    for (let i = 0; i < cars.length; i++) {
        let car = document.getElementById(cars[i].brand);
        car.className = "car";
    }
}