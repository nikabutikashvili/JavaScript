// ფაქტორიალის გამომთველი ფორმულა   
function factorial(number) {
    if(number === 0 || number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
console.log(factorial(3));

// ცელსიუს გადაყვანა ფარენჰაიტში
function convertToFahreheit(degree) {
    return (degree * (9/5)) + 32;
}
console.log(convertToFahreheit(5));

// ფარენჰაიტის გადაყვანა ცელსიუსში
function convertToCelius(degree) {
    return (degree - 32) * (5/9)
}
console.log(convertToCelius(41));

// უდიდესი საერთო გამყოფი
function gcd(number1, number2) {
    if(number1 < number2) {
        var min = number1;
        var max = number2;
    } else {
        var min = number2;
        var max = number1
    }
    var remainder = max % min;
    if(remainder === 0 ) {
        return min;
    } else {
        return gcd(min, remainder);
    }
}
console.log(gcd(14, 62));