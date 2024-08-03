function doubleIfGreaterThanTen(arr) {
    return arr
        .filter(num => num > 10)
        .map(num => num * 2);
}
const numbers = [5, 12, 7, 20, 10,3,18];
const result = doubleIfGreaterThanTen(numbers);
console.log("Doubled numbers that are greater than 10:", result); 