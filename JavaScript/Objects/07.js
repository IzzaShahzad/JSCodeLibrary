function getObjectEntries(obj) {
    return Object.entries(obj);
}
const exampleObject = { name: 'Izzah', age: 21, occupation: 'Software-Engineer' };
const entries = getObjectEntries(exampleObject);

console.log("Object entries:", entries);