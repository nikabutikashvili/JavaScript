export function searchByPrice(preferredPrice, cars) {
    if(isNaN(preferredPrice)) {
        alert("გთხოვთ შეიყვანოთ ფასი სწორ ფორმატში");
    } else {
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
