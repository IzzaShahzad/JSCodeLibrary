function getObjectValues(obj) {
    return Object.values(obj);
}
const exampleObject = { name: 'Izzah', age: 21, occupation: 'Software-Engineer' };
const values = getObjectValues(exampleObject);

console.log("Object values:", values);