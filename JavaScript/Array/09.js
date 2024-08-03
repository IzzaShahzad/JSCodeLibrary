const nestedArray = [1, [2, [3, 4], 5], [6]];
const flatten = array => array.reduce((accumulator, item) => {
    return accumulator.concat(Array.isArray(item) ? flatten(item) : item);
}, []);

console.log("Flattened array:", flatten(nestedArray));