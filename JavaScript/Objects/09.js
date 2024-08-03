function updateProperties(target, updates) {
    Object.assign(target, updates);
}
const targetObject = { name: 'Izzah', age: 30 };
const updates = { age: 21, occupation: 'Software-Engineer' };

updateProperties(targetObject, updates);

console.log("Updated object:", targetObject);