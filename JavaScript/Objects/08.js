function deepMerge(obj1, obj2) {
    const result = { ...obj1 };

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key]) &&
                typeof result[key] === 'object' && result[key] !== null && !Array.isArray(result[key])) {
                result[key] = deepMerge(result[key], obj2[key]);
            } else {
                result[key] = obj2[key];
            }
        }
    }

    return result;
}
const obj1 = { a: 1, b: { x: 10, y: 20 }, c: 3 };
const obj2 = { b: { y: 25, z: 30 }, d: 4 };
const merged = deepMerge(obj1, obj2);

console.log("Deeply merged objects are:", merged);