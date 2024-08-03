const users = [
    { name: 'Izza', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Diana', age: 40 }
];

const namesOlderThan30 = users
    .filter(user => user.age > 30) 
    .map(user => user.name);      

console.log("Names of users older than 30:", namesOlderThan30);