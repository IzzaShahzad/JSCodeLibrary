function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
const emptyObj = {};
const nonEmptyObj = { key: 'value' };

console.log("Is emptyObj empty?", isEmpty(emptyObj));      
console.log("Is nonEmptyObj empty?", isEmpty(nonEmptyObj)); 