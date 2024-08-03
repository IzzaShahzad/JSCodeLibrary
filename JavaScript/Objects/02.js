const person = {
    name: 'Izzah',
    age: 21,
    occupation: 'Software-Engineer'
};

function printProperties(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
printProperties(person);