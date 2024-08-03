function cloneObject(obj) {
    return { ...obj };
}
const original = { name: 'Izzah', age: 21 };
const cloned = cloneObject(original);

console.log("Original object:", original);
console.log("Cloned object:", cloned);