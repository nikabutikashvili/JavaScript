const array = [2, 3, 6, 8, 12, 17, 25, 31];
function binarySearch(number, array) {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while(endIndex >= startIndex) {
        let middleIndex = Math.floor(startIndex + (endIndex - startIndex)/2);
        if(array[middleIndex] === number) {
            return middleIndex;
        } else if(number < middleIndex) {
            endIndex = middleIndex - 1;
        } else {
            startIndex = middleIndex + 1;
        }
    }
    return -1;
}
console.log(binarySearch(55, array));