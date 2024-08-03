function transformArray(arr, keyProp) {
    return arr.reduce((acc, obj) => {
        const key = obj[keyProp];
        const remainingProps = Object.entries(obj).filter(([k]) => k !== keyProp).map(([k, v]) => ({ [k]: v }));

        if (!acc[key]) {
            acc[key] = [];
        }

        acc[key].push(...remainingProps);

        return acc;
    }, {});
}
const array = [
    { id: 'a', name: 'Izzah', age: 21 },
    { id: 'b', name: 'David', age: 25 },
    { id: 'a', name: 'Charlie', age: 31 }
];

const result = transformArray(array, 'id');

console.log("Transformed object:", result);