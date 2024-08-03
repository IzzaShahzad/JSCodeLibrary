function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

// Example usage
const obj1 = { name: 'Izzah', age: 21 };
const obj2 = { occupation: 'Software-Engineer', location: 'Isb' };
const merged = mergeObjects(obj1, obj2);

console.log("Merged object:", merged);