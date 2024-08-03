function getObjectKeys(obj) {
    return Object.keys(obj);
}

// Example usage
const exampleObject = { name: 'Izzah', age: 21, occupation: 'Software-Engineer' };
const keys = getObjectKeys(exampleObject);

console.log("Object keys:", keys);